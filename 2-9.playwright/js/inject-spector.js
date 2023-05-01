// window._hydGLContexts = [];
window._hydSpectorContexts = [];
window._hydCaptured = [];

function hydTmp(context) {
    const spector = new SPECTOR.Spector();
    spector.spyCanvases();
    spector.onCapture.add((payload) => {
        const compressed = hydpako.gzip(JSON.stringify(payload), { to: 'string' });
        const ret = "data:json/gzip;base64," + window.btoa(compressed.reduce((str, charCode) => str + String.fromCharCode(charCode), ''));
        window._hydCaptured.push(ret);
    });
    // spector.startCapture(context, 100000000, true);

    window._hydSpectorContexts.push([spector, context]);
    // window._hydGLContexts.push(context);
}

const hydOriginGetContext = HTMLCanvasElement.prototype.getContext;
HTMLCanvasElement.prototype.getContext = function () {
    const context = hydOriginGetContext.apply(this, arguments);
    if (arguments[0].indexOf('webgl') >= 0) {
        hydTmp(context);
    }
    return context;
}

const hydOriginOffscreenGetContext = OffscreenCanvas.prototype.getContext;
OffscreenCanvas.prototype.getContext = function () {
    const context = hydOriginOffscreenGetContext.apply(this, arguments);
    if (arguments[0].indexOf('webgl') >= 0) {
        hydTmp(context);
    }
    return context;
}

function hydSpectorStart() {
    for (const [spector, gl] of window._hydSpectorContexts) {
        spector.captureNextFrame(gl, true);
        // spector.startCapture(gl, 100000000, true);
    }
}

function hydSpectorStop() {
    let ret = [];
    for (const [spector, gl] of window._hydSpectorContexts) {
        // ret.push(JSON.stringify(spector.stopCapture()));
        ret.push(spector.stopCapture());
    }
    return ret;
}