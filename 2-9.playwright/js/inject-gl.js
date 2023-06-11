const HYD_MAX_FUNCTIONS = 1_000_000_000;
const INJECT_GL_CALLS = true;
let HYD_RECORD = true;
let HYD_RECORD_RAF = false;

window.hydGlContexts = new Set();
window.hydUsedWebgl = null;
window.hydUsedOffScreenCanvasTypes = new Set();
window.hydFrames = 0;

function hydGetCounters() {
    return {
        frames: window.hydFrames,
        contextsNum: window.hydGlContexts.size,
        usedWebGL: window.hydUsedWebgl,
        usedOffScreenCanvas: Array.from(window.hydUsedOffScreenCanvasTypes).sort(),
    }
}

function hydFrameCount() {
    window.hydFrames++;
    requestAnimationFrame(hydFrameCount);
}
requestAnimationFrame(hydFrameCount);

const hydOriginGetContext = HTMLCanvasElement.prototype.getContext;
const hydOriginOffscreenGetContext = OffscreenCanvas.prototype.getContext;

function HydNewGetContext() {
    let context = hydOriginGetContext.apply(this, arguments);
    if (context && arguments[0].indexOf('webgl') !== -1 && window.hydGlContexts.has(context) === false) {
        window.hydGlContexts.add(context);
        
        const when = performance.now();
        context.ext_WEBGL_debug_shaders = context.getExtension("WEBGL_debug_shaders");
        context.maghsk = {
            exception: false,
            createTime: when,
            createArguments: arguments,
            counter: {
                resources: {},
                funcCount: {},
                // bufferDataSent: 0,   // byte length
                // bufferSubDataSent: 0,   // byte length
                // texImage2DSent: 0,   // byte length
                // texSubImage2DSent: 0,   // byte length
                // uniformSent: 0,   // byte length
                // uniformMatrixSent: 0,   // byte length
                vertexCount: 0,
                semanticVertexCount: {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                },
                semanticVertexCalled: {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                },

                // texturePixelsSent: 0,
                // textureBytesSent: 0,
                textureTypes: {},
            },
            extensions: [],
            programs: [],
            shaders: [],
        };
        context.rafList = [];

        if (window.hydUsedWebgl === null) {
            window.hydUsedWebgl = when;
        }

        if (INJECT_GL_CALLS) {
        for (const name in context) {
            try { context[name]; } catch (e) { continue; }

            if (typeof context[name] === 'function') {
                let origin = context[name];
                context[name] = function (...args) {
                    const ret = origin.apply(context, args);
                    if (HYD_RECORD) {
                        context.maghsk.counter.funcCount[name] = (context.maghsk.counter.funcCount[name] || 0) + 1;

                        if (name.startsWith('create')) {
                            const shortName = name.substring(6);
                            if (context.maghsk.counter.resources[shortName] === undefined) {
                                context.maghsk.counter.resources[shortName] = 0;
                            }
                            context.maghsk.counter.resources[shortName]++;
                        }
                        
                        try {
                            if (name.startsWith('getExtension')) {
                                if (args[0] && context.maghsk.extensions.indexOf(args[0]) === -1) {
                                    context.maghsk.extensions.push(args[0]);
                                }
                            } else if (name.startsWith('createShader')) {
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
                            } else if (name.startsWith('shaderSource')) {
                                if (args[0]) context.maghsk.shaders[args[0].__hyd_shader_id__].source = args[1];
                            } else if (name.startsWith('compileShader')) {
                                if (args[0]) {
                                    context.maghsk.shaders[args[0].__hyd_shader_id__].compiled = true;
                                    context.maghsk.shaders[args[0].__hyd_shader_id__].translatedSource = context.ext_WEBGL_debug_shaders.getTranslatedShaderSource(args[0]);
                                }
                            } else if (name.startsWith('createProgram')) {
                                if (!("__hyd_program_id__" in ret)) {
                                    ret.__hyd_program_id__ = context.maghsk.programs.length;
                                    context.maghsk.programs.push({
                                        id: ret.__hyd_program_id__,
                                        linked: false,
                                        shaders: [],
                                        useCounts: 0,
                                    });
                                }
                            } else if (name.startsWith('attachShader')) {
                                if (args[0]) {
                                    const program = context.maghsk.programs[args[0].__hyd_program_id__];
                                    const shaderId = args[1].__hyd_shader_id__;
                                    if (program.shaders.indexOf(shaderId) === -1) {
                                        program.shaders.push(shaderId);
                                    }
                                }
                            } else if (name.startsWith('linkProgram')) {
                                if (args[0]) context.maghsk.programs[args[0].__hyd_program_id__].linked = true;
                            } else if (name.startsWith('useProgram')) {
                                if (args[0]) context.maghsk.programs[args[0].__hyd_program_id__].useCounts += 1;
                            } else if (name.startsWith('draw')) {
                                let count = 0;
                                if (name.startsWith('drawArrays')) {
                                    count = args[2];
                                } else if (name.startsWith('drawElements')) {
                                    count = args[1];
                                } else if (name.startsWith('drawArraysInstanced')) {
                                    count = args[2] * args[3];
                                } else if (name.startsWith('drawElementsInstanced')) {
                                    count = args[1] * args[4];
                                } else if (name.startsWith('drawRangeElements')) {
                                    count = args[3];
                                }

                                context.maghsk.counter.vertexCount += count;
                                context.maghsk.counter.semanticVertexCount[args[0]] += count;
                                context.maghsk.counter.semanticVertexCalled[args[0]] += 1;
                            // } else if (name.startsWith('bufferData')) {
                            //     if (args.length == 5) {
                            //         context.maghsk.counter.bufferDataSent += args[4];
                            //     } else {
                            //         if (typeof args[1] === 'object') {
                            //             if ('byteLength' in args[1]) {
                            //                 context.maghsk.counter.bufferDataSent += args[1].byteLength;
                            //             } else if ('length' in args[1]) {
                            //                 context.maghsk.counter.bufferDataSent += args[1].length;
                            //             }
                            //         }
                            //     }
                            // } else if (name.startsWith('bufferSubData')) {
                            //     if  (args.length == 5) {
                            //         context.maghsk.counter.bufferSubDataSent += args[4];
                            //     } else {
                            //         if (typeof args[2] === 'object') {
                            //             if ('byteLength' in args[2]) {
                            //                 context.maghsk.counter.bufferSubDataSent += args[2].byteLength;
                            //             } else if ('length' in args[2]) {
                            //                 context.maghsk.counter.bufferSubDataSent += args[2].length;
                            //             }
                            //         }
                            //     }
                            } else if (name.startsWith('readPixels')) {
                                const width = args[2];
                                const height = args[3];
                                context.maghsk.pixelsRead += width * height;
                            } else if (name.toLowerCase().indexOf('teximage') !== -1
                                    || name.toLowerCase().indexOf('texsub') !== -1
                                    || name.toLowerCase().indexOf('texstorage') !== -1) {
                                for (const arg of args) {
                                    if (typeof arg === 'object' && arg && arg.constructor && arg.constructor.name) {
                                        context.maghsk.counter.textureTypes[arg.constructor.name] = (context.maghsk.counter.textureTypes[arg.constructor.name] || 0) + 1;
                                        // if (   arg instanceof ImageData
                                        //     || arg instanceof HTMLImageElement
                                        //     || arg instanceof HTMLCanvasElement
                                        //     || arg instanceof HTMLVideoElement
                                        //     || arg instanceof OffscreenCanvas
                                        //     || arg instanceof ImageBitmap) {
                                        //         context.maghsk.counter.texturePixelsSent += arg.width * arg.height;
                                        //     }
                                        // else {
                                        //     if ('byteLength' in arg) {
                                        //         context.maghsk.counter.textureBytesSent += arg.byteLength;
                                        //     } else if ('length' in arg) {
                                        //         context.maghsk.counter.textureBytesSent += arg.length;
                                        //     }
                                        // }
                                    }
                                }
                            }
                        } catch {
                            context.maghsk.exception = true;
                        }
                    }
                    return ret;
                }
            }
        }
        context.hydRafSignal = function() {
            if (HYD_RECORD) {
                const payload = JSON.parse(JSON.stringify(context.maghsk.counter));
                payload['when'] = performance.now();
                context.rafList.push(payload);
            }
        }
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
    return {
        url: window.location.href,
        title: document.title,
        date: Date.now(),
        when: performance.now(),
        counter: hydGetCounters(),
        contextInfo: Array.from(window.hydGlContexts).map(context => {
            return {
                "maghsk": context.maghsk,
                "rafList": context.rafList,
                "canvasSize": [context.canvas.width, context.canvas.height],
                "canvasHidden": context.canvas.hidden,
                "canvasContained": document.contains(context.canvas),
                "contextAttributes": context.getContextAttributes(),
            };
        }),
    };
}

// check if rendered 10 seconds
function HydCouldStopWaiting(seconds) {
    return (window.hydUsedWebgl !== null && performance.now() - window.hydUsedWebgl > seconds * 1000);
}

function callAllRafSignal() {
    window.hydGlContexts.forEach(context => {
        context.hydRafSignal();
    });
    if (HYD_RECORD && HYD_RECORD_RAF) {
        window.requestAnimationFrame(callAllRafSignal);
    }
}
