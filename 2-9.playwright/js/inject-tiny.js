window.hydUsedOffScreenCanvas = false;
window.hydFrames = 0;

OffscreenCanvas.prototype.getContext = (function(oldFn) {
    window.hydUsedOffScreenCanvas = true;
    return function(...args) {
        return oldFn.apply(this, args);
    }
})(OffscreenCanvas.prototype.getContext);

function hydFrameCount() {
    window.hydFrames++;
    requestAnimationFrame(hydFrameCount);
}
requestAnimationFrame(hydFrameCount);
