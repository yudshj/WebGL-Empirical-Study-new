self.HydOriginOffscreenCanvasGetContext = OffscreenCanvas.prototype.getContext;
self.HydOffscreenCanvasContextCount = {};
self.HydOffscreenCanvasContextSet = new Set();

OffscreenCanvas.prototype.getContext = function (...args) {
    const ret = self.HydOriginOffscreenCanvasGetContext.apply(this, args);
    console.log("getContext", args, ret)
    if (ret && !self.HydOffscreenCanvasContextSet.has(ret)) {
        self.HydOffscreenCanvasContextSet.add(ret);
        self.HydOffscreenCanvasContextCount[args[0]] = (self.HydOffscreenCanvasContextCount[args[0]] || 0) + 1;
    }
    return ret;
}