const HYD_MAX_FUNCTIONS = 1_000_000_000;
const INJECT_GL_CALLS = true;
let HYD_RECORD = true;
let HYD_RECORD_RAF = false;

window.hydGlContexts = new Set();
window.hydUsedWebgl = null;
window.hydUsedOffScreenCanvasTypes = new Set();
window.hydRenderedFrames = 0;

function hydGetCounters() {
    return {
        frames: window.hydRenderedFrames,
        contextsNum: window.hydGlContexts.size,
        usedWebGL: window.hydUsedWebgl,
        usedOffScreenCanvas: Array.from(window.hydUsedOffScreenCanvasTypes).sort(),
    }
}

function hydFrameCount() {
    window.hydRenderedFrames++;
    requestAnimationFrame(hydFrameCount);
}
requestAnimationFrame(hydFrameCount);

const hydOriginGetContext = HTMLCanvasElement.prototype.getContext;
const hydOriginOffscreenGetContext = OffscreenCanvas.prototype.getContext;


const inject_functions = {
    'getExtension': (name, args, ret, context) => {
        if (args[0] && context.maghsk.extensions.indexOf(args[0]) === -1) {
            context.maghsk.extensions.push(args[0]);
        }
    },
    'shaderSource': (name, args, ret, context) => {
        if (args[0]) context.maghsk.shaders[args[0].__hyd_shader_id__].source = args[1];
    },
    'compileShader': (name, args, ret, context) => {
        if (args[0]) {
            context.maghsk.shaders[args[0].__hyd_shader_id__].compiled = true;
            context.maghsk.shaders[args[0].__hyd_shader_id__].translatedSource = context.__hyd_ext_WEBGL_debug_shaders.getTranslatedShaderSource(args[0]);
        }
    },
    'attachShader': (name, args, ret, context) => {
        if (args[0]) {
            const program = context.maghsk.programs[args[0].__hyd_program_id__];
            const shaderId = args[1].__hyd_shader_id__;
            if (program.shaders.indexOf(shaderId) === -1) {
                program.shaders.push(shaderId);
            }
        }
    },
    'linkProgram': (name, args, ret, context) => {
        const program = args[0];
        if (program) {
            context.maghsk.programs[program.__hyd_program_id__].linked = true;
            context.maghsk.programs[program.__hyd_program_id__].attributes_num = context.getProgramParameter(program, context.ACTIVE_ATTRIBUTES);
            context.maghsk.programs[program.__hyd_program_id__].uniforms_num = context.getProgramParameter(program, context.ACTIVE_UNIFORMS);
        }
    },
    'useProgram': (name, args, ret, context) => {
        if (args[0]) {
            context.maghsk.programs[args[0].__hyd_program_id__].useCounts += 1;
        }
        context.__hyd_program__ = args[0];
    },
    'drawArrays': (name, args, ret, context) => {
        const count = args[2];
        context.maghsk.counter.vertexCount += count;
        context.maghsk.counter.primitiveCount[args[0]] += count;
        if (context.__hyd_program__) {
            context.maghsk.programs[context.__hyd_program__.__hyd_program_id__].vertexCount += count;
        }
        // context.maghsk.counter.semanticVertexCount[args[0]] += count;
        // context.maghsk.counter.semanticVertexCalled[args[0]] += 1;
    },
    'drawElements': (name, args, ret, context) => {
        const count = args[1];
        context.maghsk.counter.vertexCount += count;
        context.maghsk.counter.primitiveCount[args[0]] += count;
        if (context.__hyd_program__) {
            context.maghsk.programs[context.__hyd_program__.__hyd_program_id__].vertexCount += count;
        }
        // context.maghsk.counter.semanticVertexCount[args[0]] += count;
        // context.maghsk.counter.semanticVertexCalled[args[0]] += 1;
    },
    'drawArraysInstanced': (name, args, ret, context) => {
        const count = args[2] * args[3];
        context.maghsk.counter.vertexCount += count;
        context.maghsk.counter.primitiveCount[args[0]] += count;
        if (context.__hyd_program__) {
            context.maghsk.programs[context.__hyd_program__.__hyd_program_id__].vertexCount += count;
        }
        // context.maghsk.counter.semanticVertexCount[args[0]] += count;
        // context.maghsk.counter.semanticVertexCalled[args[0]] += 1;
    },
    'drawElementsInstanced': (name, args, ret, context) => {
        const count = args[1] * args[4];
        context.maghsk.counter.vertexCount += count;
        context.maghsk.counter.primitiveCount[args[0]] += count;
        if (context.__hyd_program__) {
            context.maghsk.programs[context.__hyd_program__.__hyd_program_id__].vertexCount += count;
        }
        // context.maghsk.counter.semanticVertexCount[args[0]] += count;
        // context.maghsk.counter.semanticVertexCalled[args[0]] += 1;
    },
    'drawRangeElements': (name, args, ret, context) => {
        const count = args[3];
        context.maghsk.counter.vertexCount += count;
        context.maghsk.counter.primitiveCount[args[0]] += count;
        if (context.__hyd_program__) {
            context.maghsk.programs[context.__hyd_program__.__hyd_program_id__].vertexCount += count;
        }
        // context.maghsk.counter.semanticVertexCount[args[0]] += count;
        // context.maghsk.counter.semanticVertexCalled[args[0]] += 1;
    },
    'bufferData': (name, args, ret, context) => {
        if (args.length == 5) {
            context.maghsk.counter.bufferDataSent += args[4];
        } else {
            for (const arg of args) {
                if (arg && arg['byteLength']) {
                    context.maghsk.counter.bufferDataSent += arg['byteLength'];
                    break;
                }
            }
        }
    },
    'bufferSubData': (name, args, ret, context) => {
        if  (args.length == 5) {
            context.maghsk.counter.bufferSubDataSent += args[4];
        } else {
            for (const arg of args) {
                if (arg && typeof(arg) === 'object' && 'byteLength' in arg) {
                    context.maghsk.counter.bufferSubDataSent += arg['byteLength'];
                    break;
                }
            }
        }
    },
    'readPixels': (name, args, ret, context) => {
        const width = args[2];
        const height = args[3];
        context.maghsk.counter.pixelsRead += width * height;
    },
    'texImage': (name, args, ret, context) => {
        if (context.__hyd_cache__.has(ret)) {
            return;
        }
        context.__hyd_cache__.add(ret);
        const internalFormat = args[2];
        let width = args[3];
        let height = args[4];
        for (const arg of args) {
            if (typeof arg === 'object' && arg && arg.constructor && arg.constructor.name) {
                if ('width' in arg) {
                    width = arg.width;
                    height = arg.height;
                }
                context.maghsk.counter.textureTypes[arg.constructor.name] = (context.maghsk.counter.textureTypes[arg.constructor.name] || 0) + 1;
            }
        }
        context.maghsk.counter.textureFormat.push([internalFormat, width, height]);
    },
    'compressedTexImage': (name, args, ret, context) => {
        if (context.__hyd_cache__.has(ret)) {
            return;
        }
        context.__hyd_cache__.add(ret);
        const internalFormat = args[2];
        for (const arg of args) {
            if (typeof arg === 'object' && arg && arg.constructor && arg.constructor.name) {
                context.maghsk.counter.textureTypes[arg.constructor.name] = (context.maghsk.counter.textureTypes[arg.constructor.name] || 0) + 1;
            }
        }
        const width = args[3];
        const height = args[4];
        context.maghsk.counter.textureFormat.push([internalFormat, width, height]);
    },
    'create': (name, args, ret, context) => {
        const shortName = name.substring(6);
        if (context.maghsk.counter.resources[shortName] === undefined) {
            context.maghsk.counter.resources[shortName] = 0;
        }
        context.maghsk.counter.resources[shortName]++;

        if (name === 'createShader') {
            if (!("__hyd_shader_id__" in ret)) {
                ret.__hyd_shader_id__ = context.maghsk.shaders.length;
                context.maghsk.shaders.push({
                    id: ret.__hyd_shader_id__,
                    compiled: false,
                    source: null,
                    translatedSource: null,
                    type: args[0],
                });
            }
        } else if (name === 'createProgram') {
            if (!("__hyd_program_id__" in ret)) {
                ret.__hyd_program_id__ = context.maghsk.programs.length;
                context.maghsk.programs.push({
                    id: ret.__hyd_program_id__,
                    linked: false,
                    shaders: [],
                    useCounts: 0,
                    vertexCount: 0,
                    attributes_num: null,
                    uniforms_num: null,
                });
            }
        }
    },
    'delete': (name, args, ret, context) => {
        const shortName = name.substring(6);
        if (context.maghsk.counter.deleted_resources[shortName] === undefined) {
            context.maghsk.counter.deleted_resources[shortName] = 0;
        }
        context.maghsk.counter.deleted_resources[shortName]++;
    },
}

function HydNewGetContext() {
    let context = hydOriginGetContext.apply(this, arguments);
    if (context && typeof(context) === 'object' && arguments[0].indexOf('webgl') !== -1 && window.hydGlContexts.has(context) === false) {
        window.hydGlContexts.add(context);
        
        const when = performance.now();
        context.__hyd_ext_WEBGL_debug_shaders = context.getExtension("WEBGL_debug_shaders");
        context.__hyd_cache__ = new Set();
        context.__hyd_program__ = null;
        context.maghsk = {
            exception: "",
            createTime: when,
            createArguments: arguments,
            counter: {
                pixelsRead: 0,
                resources: {},
                deleted_resources: {},
                funcCount: {},
                bufferDataSent: 0,   // byte length
                bufferSubDataSent: 0,   // byte length
                // texImage2DSent: 0,   // byte length
                // texSubImage2DSent: 0,   // byte length
                // uniformSent: 0,   // byte length
                // uniformMatrixSent: 0,   // byte length
                vertexCount: 0,
                primitiveCount: {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                },

                textureFormat: [],
                compressedTextureFormat: [],

                // textureBytesSent: 0, // updated by sub
                // compressedTextureBytesSent: 0, // updated by sub
                
                textureTypes: {},
            },
            extensions: [],
            programs: [],
            shaders: [],
        };
        // context.rafList = [];

        if (window.hydUsedWebgl === null) {
            window.hydUsedWebgl = when;
        }

        if (INJECT_GL_CALLS) {
        for (const name in context) {
            try { context[name]; } catch (e) { continue; }     // the purpose of this line is to ignore getter functions

            if (typeof context[name] === 'function') {
                const origin = context[name];

                for (const [funcName, func] of Object.entries(inject_functions)) {
                    if (name.startsWith(funcName)) {
                        context[name] = function (...args) {
                            const ret = origin.apply(context, args);
                            if (HYD_RECORD) {
                                // context.maghsk.counter.funcCount[name] = (context.maghsk.counter.funcCount[name] || [])
                                // context.maghsk.counter.funcCount[name].push(performance.now() - when);
                                context.maghsk.counter.funcCount[name] = (context.maghsk.counter.funcCount[name] || 0) + 1;
                                try {
                                    func.apply(this, [name, args, ret, context]);
                                }
                                catch (e) {
                                    context.maghsk.exception += name + ';\n';
                                }
                            }
                            return ret;
                        }
                        break;
                    }
                }
            }
        }
        // context.hydRafSignal = function() {
        //     if (HYD_RECORD) {
        //         const payload = JSON.parse(JSON.stringify(context.maghsk.counter));
        //         payload['when'] = performance.now();
        //         // context.rafList.push(payload);
        //     }
        // }
        }

    }
    return context;
}

function HydNewOffscreenGetContext() {
    let context = hydOriginOffscreenGetContext.apply(this, arguments);
    window.hydUsedOffScreenCanvasTypes.add(arguments[0]);
    return context;
}

HTMLCanvasElement.prototype.getContext = HydNewGetContext;
OffscreenCanvas.prototype.getContext = HydNewOffscreenGetContext;

function HydGetGLInfo() {
    HYD_RECORD = false;
    const ret = {
        url: window.location.href,
        title: document.title,
        date: Date.now(),
        when: performance.now(),
        counter: hydGetCounters(),
        contextInfo: Array.from(window.hydGlContexts).map(context => {
            return {
                "maghsk": context.maghsk,
                // "rafList": context.rafList,
                "canvasSize": [context.canvas.width, context.canvas.height],
                "canvasHidden": context.canvas.hidden,
                "canvasContained": document.contains(context.canvas),
                "contextAttributes": context.getContextAttributes(),
            };
        }),
    };
    HYD_RECORD = true;
    return ret;
}

// check if rendered 10 seconds
function HydCouldStopWaiting(seconds) {
    return (window.hydUsedWebgl !== null && performance.now() - window.hydUsedWebgl > seconds * 1000);
}

// function callAllRafSignal() {
//     window.hydGlContexts.forEach(context => {
//         context.hydRafSignal();
//     });
//     if (HYD_RECORD && HYD_RECORD_RAF) {
//         window.requestAnimationFrame(callAllRafSignal);
//     }
// }
