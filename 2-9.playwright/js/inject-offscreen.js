window.HydOriginOffscreenCanvasGetContext = OffscreenCanvas.prototype.getContext;
window.HydOffscreenCanvasContextCount = {};
window.HydOffscreenCanvasContextSet = new Set();

OffscreenCanvas.prototype.getContext = function (...args) {
    const ret = window.HydOriginOffscreenCanvasGetContext.apply(this, args);
    console.log("getContext", args, ret)
    if (ret && !window.HydOffscreenCanvasContextSet.has(ret)) {
        window.HydOffscreenCanvasContextSet.add(ret);
        window.HydOffscreenCanvasContextCount[args[0]] = (window.HydOffscreenCanvasContextCount[args[0]] || 0) + 1;
    }
    return ret;
}