const HYD_MAX_FUNCTIONS = 1_000_000_000;
const INJECT_GL_CALLS = true;
let HYD_RECORD = true;
let HYD_RECORD_RAF = false;

window.hydGlContexts = new Set();
window.hydUsedWebgl = null;
window.hydUsedOffScreenCanvas = false;
window.hydFrames = 0;
window.hydNetIdleTimeout = -1;

function hydGetCounters() {
    return {
        frames: window.hydFrames,
        contextsNum: window.hydGlContexts.size,
        usedWebGL: window.hydUsedWebgl,
        usedOffScreenCanvas: window.hydUsedOffScreenCanvas,
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
        context.maghsk = {
            createTime: when,
            createArguments: arguments,
            counter: {
                funcCount: {},
                bufferDataSent: 0,   // byte length
                bufferSubDataSent: 0,   // byte length
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

                texturePixelsSent: 0,
                textureTypes: {},
                textureBytesSent: 0,
            },
            rafList: [],
        }

        // context.maghsk.counter.semanticVertexCount[context.POINTS] = 0;
        // context.maghsk.counter.semanticVertexCount[context.LINES] = 0;
        // context.maghsk.counter.semanticVertexCount[context.LINE_LOOP] = 0;
        // context.maghsk.counter.semanticVertexCount[context.LINE_STRIP] = 0;
        // context.maghsk.counter.semanticVertexCount[context.TRIANGLES] = 0;
        // context.maghsk.counter.semanticVertexCount[context.TRIANGLE_STRIP] = 0;
        // context.maghsk.counter.semanticVertexCount[context.TRIANGLE_FAN] = 0;

        // context.maghsk.counter.semanticVertexCalled[context.POINTS] = 0;
        // context.maghsk.counter.semanticVertexCalled[context.LINES] = 0;
        // context.maghsk.counter.semanticVertexCalled[context.LINE_LOOP] = 0;
        // context.maghsk.counter.semanticVertexCalled[context.LINE_STRIP] = 0;
        // context.maghsk.counter.semanticVertexCalled[context.TRIANGLES] = 0;
        // context.maghsk.counter.semanticVertexCalled[context.TRIANGLE_STRIP] = 0;
        // context.maghsk.counter.semanticVertexCalled[context.TRIANGLE_FAN] = 0;

        context.capturedFunctions = [];
        if (window.hydUsedWebgl === null) {
            window.hydUsedWebgl = when;
        }

        const functionNamesToCapture = ['getExtension', 'createShader', 'compileShader', 'createProgram', 'attachShader', 'linkProgram', 'useProgram', 'shaderSource', 'deleteShader', 'deleteProgram'];
        
        if (INJECT_GL_CALLS) {
        for (const name in context) {
            try { context[name]; } catch (e) { continue; }

            if (typeof context[name] === 'function') {
                let origin = context[name];
                context[name] = function () {
                    const ret = origin.apply(context, arguments);
                    // if (window.hydFramesRendered < MAX_FRAMES && context.capturedFunctions.length < HYD_MAX_FUNCTIONS) {
                    if (HYD_RECORD && context.capturedFunctions.length < HYD_MAX_FUNCTIONS) {
                        context.maghsk.counter.funcCount[name] = (context.maghsk.counter.funcCount[name] || 0) + 1;
                        if (functionNamesToCapture.indexOf(name) !== -1) {
                            context.capturedFunctions.push({name: name, args: arguments, ret: ret});
                        }
                        if (name.startsWith('draw')) {
                            let count = 0;
                            if (name.startsWith('drawArrays')) {
                                count = arguments[2];
                            } else if (name.startsWith('drawElements')) {
                                count = arguments[1];
                            } else if (name.startsWith('drawArraysInstanced')) {
                                count = arguments[2] * arguments[3];
                            } else if (name.startsWith('drawElementsInstanced')) {
                                count = arguments[1] * arguments[4];
                            } else if (name.startsWith('drawRangeElements')) {
                                count = arguments[3];
                            }

                            context.maghsk.counter.vertexCount += count;
                            context.maghsk.counter.semanticVertexCount[arguments[0]] += count;
                            context.maghsk.counter.semanticVertexCalled[arguments[0]] += 1;
                        } else if (name.startsWith('bufferData')) {
                            if (arguments.length == 5) {
                                context.maghsk.counter.bufferDataSent += arguments[4];
                            } else {
                                if (typeof arguments[1] === 'object' && 'byteLength' in arguments[1]) {
                                    context.maghsk.counter.bufferDataSent += arguments[1].byteLength;
                                } else {
                                    context.maghsk.counter.bufferDataSent += arguments[1].length;
                                }
                            }
                        } else if (name.startsWith('bufferSubData')) {
                            if  (arguments.length == 5) {
                                context.maghsk.counter.bufferSubDataSent += arguments[4];
                            } else {
                                if (typeof arguments[2] === 'object' && 'byteLength' in arguments[2]) {
                                    context.maghsk.counter.bufferSubDataSent += arguments[2].byteLength;
                                } else {
                                    context.maghsk.counter.bufferSubDataSent += arguments[2].length;
                                }
                            }
                        } else if (name.startsWith('readPixels')) {
                            const width = arguments[2];
                            const height = arguments[3];
                            context.maghsk.pixelsRead += width * height;
                        } else if (name.toLowerCase().indexOf('teximage') !== -1
                                || name.toLowerCase().indexOf('texsub') !== -1
                                || name.toLowerCase().indexOf('texstorage') !== -1) {
                            for (const arg of arguments) {
                                if (arg !== null && arg.constructor !== null && "name" in arg.constructor && typeof arg === 'object') {
                                    context.maghsk.counter.textureTypes[arg.constructor.name] = (context.maghsk.counter.textureTypes[arg.constructor.name] || 0) + 1;
                                    if (   arg instanceof ImageData
                                        || arg instanceof HTMLImageElement
                                        || arg instanceof HTMLCanvasElement
                                        || arg instanceof HTMLVideoElement
                                        || arg instanceof OffscreenCanvas
                                        || arg instanceof ImageBitmap) {
                                            context.maghsk.counter.texturePixelsSent += arg.width * arg.height;
                                        }
                                    else {
                                        if ('byteLength' in arg) {
                                            context.maghsk.counter.textureBytesSent += arg.byteLength;
                                        } else if ('length' in arg) {
                                            context.maghsk.counter.textureBytesSent += arg.length;
                                        }
                                    }
                                }
                            }
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
                context.maghsk.rafList.push(payload);
                // context.maghsk.rafList.push(structuredClone(context.maghsk.counter));
            }
        }
        }

    }
    return context;
}

function newOffscreenGetContext() {
    let context = hydOriginOffscreenGetContext.apply(this, arguments);
    window.hydUsedOffScreenCanvas = true;
    return context;
}

HTMLCanvasElement.prototype.getContext = HydNewGetContext;
OffscreenCanvas.prototype.getContext = newOffscreenGetContext;

function HydGetGLInfo() {
    HYD_RECORD = false;
    const when = performance.now();
    // console.log("Rendered frames: " + window.hydFramesRendered);
    let contextInfos = [];
    window.hydGlContexts.forEach(context => {
        console.log("Total captured functions: " + context.capturedFunctions.length);

        let capturedPrograms = new Map();
        let tmpShader = new Map();
        let extensions = new Set();

        capturedPrograms.set(
            null,
            {
                "useCounts": 0,
                "vertexShaders": [],
                "fragmentShaders": [],
                "isDeleted": false,
                "isLinked": false,
            }
        );

        context.capturedFunctions.forEach(capturedFunction => {
            if (capturedFunction.name === 'getExtension') {
                extensions.add(capturedFunction.args[0]);
            } else if (capturedFunction.name === 'createProgram') {
                capturedPrograms.set(
                    capturedFunction.ret,
                    {
                        "useCounts": 0,
                        "vertexShaders": [],
                        "fragmentShaders": [],
                        "isDeleted": false,
                        "isLinked": false,
                    }
                );
            } else if (capturedFunction.name === 'createShader') {
                tmpShader.set(
                    capturedFunction.ret,
                    {
                        "type": capturedFunction.args[0],
                        "source": null
                    }
                );
            } else if (capturedFunction.name === 'shaderSource') {
                tmpShader.get(capturedFunction.args[0]).source = capturedFunction.args[1];
            }
        });
        context.capturedFunctions.forEach(capturedFunction => {
            if (capturedFunction.name === 'useProgram') {
                capturedPrograms.get(capturedFunction.args[0]).useCounts++;
            } else if (capturedFunction.name === 'deleteProgram') {
                capturedPrograms.get(capturedFunction.args[0]).isDeleted = true;
            } else if (capturedFunction.name === 'linkProgram') {
                capturedPrograms.get(capturedFunction.args[0]).isLinked = true;
            } else if (capturedFunction.name === 'attachShader') {
                let program = capturedPrograms.get(capturedFunction.args[0]);
                let shader = tmpShader.get(capturedFunction.args[1]);
                if (shader.type === context.VERTEX_SHADER) {
                    program.vertexShaders.push(shader.source);
                } else {
                    program.fragmentShaders.push(shader.source);
                }
            }
        });
        
        contextInfos.push({
            "extensions": Array.from(extensions),
            "programInfo": Array.from(capturedPrograms.values()),
            "capturedFunctionsLength": context.capturedFunctions.length,
            "maghsk": context.maghsk,
            "canvasSize": [context.canvas.width, context.canvas.height],
            "canvasHidden": context.canvas.hidden,
            "canvasContained": document.contains(context.canvas),
            "vertexCount": context.maghsk.counter.vertexCount,
            "triangleCount": context.maghsk.triangleCount,
            "contextAttributes": context.getContextAttributes(),
        });
    });
    const ret = {
        url: window.location.href,
        title: document.title,
        date: Date.now(),
        when: when,
        counter: hydGetCounters(),
        contextInfo: contextInfos,
        netIdleTimeout: window.hydNetIdleTimeout,
    };
    HYD_RECORD = true;
    return ret;
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
