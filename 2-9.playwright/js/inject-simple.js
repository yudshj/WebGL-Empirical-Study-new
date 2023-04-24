window.hydGlContexts = [];
window.hydUsedWebgl = null;
window.hydUsedOffScreenCanvas = false;

function hydGetCounters() {
    return {
        contextsNum: window.hydGlContexts.length,
        usedWebGL: window.hydUsedWebgl,
        usedOffScreenCanvas: window.hydUsedOffScreenCanvas,
    }
}

const hydOriginGetContext = HTMLCanvasElement.prototype.getContext;
function HydNewGetContext() {
    let context = hydOriginGetContext.apply(this, arguments);
    if (arguments[0].indexOf('webgl') !== -1) {
        const when = performance.now();
        if (window.hydUsedWebgl === null) {
            window.hydUsedWebgl = when;
        }
        context.maghsk = {
            createTime: when,
            createArguments: arguments,
        }
        context.gman_ext = context.getExtension('GMAN_webgl_memory');

        window.hydGlContexts.push(context);
    }
    return context;
}

HTMLCanvasElement.prototype.getContext = HydNewGetContext;

OffscreenCanvas.prototype.getContext = (function(oldFn) {
    window.hydUsedOffScreenCanvas = true;
    return function(...args) {
        return oldFn.apply(this, args);
    }
})(OffscreenCanvas.prototype.getContext);

function HydGetGLInfo() {
    const when = performance.now();
    let contextInfos = [];
    window.hydGlContexts.forEach(context => {
        contextInfos.push({
            "memoryInfo": context.gman_ext.getMemoryInfo(),
            "maghsk": context.maghsk,
            "canvasSize": [context.canvas.width, context.canvas.height],
            "canvasHidden": context.canvas.hidden,
            "canvasContained": document.contains(context.canvas),
            "contextAttributes": context.getContextAttributes(),
        });
    });
    const ret = {
        "url": window.location.href,
        "title": document.title,
        "accessTime": Date.now(),
        "usedOffScreenCanvas": window.hydUsedOffScreenCanvas,
        "when": when,
        "whenUsedWebgl": window.hydUsedWebgl,
        "contextInfo": contextInfos,
    };
    return ret;
}