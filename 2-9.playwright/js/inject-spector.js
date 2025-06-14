window._hydGLContexts = new Set();
window._hydSpectorContexts = [];
window._hydCaptured = [];

function hydCompress(payload) {
    const compressed = hydpako.gzip(JSON.stringify(payload), { to: 'string' });
    const ret = "data:json/gzip;base64," + window.btoa(compressed.reduce((str, charCode) => str + String.fromCharCode(charCode), ''));
    return ret;
}

function hydTmp(context) {
    const spector = new SPECTOR.Spector();
    spector.spyCanvases();
    spector.onCapture.add((payload) => {
        window._hydCaptured.push(hydCompress(payload));
    });
    // spector.startCapture(context, 100000000, true);

    window._hydSpectorContexts.push([spector, context]);
    // window._hydGLContexts.push(context);
}

const hydOriginGetContext = HTMLCanvasElement.prototype.getContext;
HTMLCanvasElement.prototype.getContext = function () {
    const context = hydOriginGetContext.apply(this, arguments);
    if (context && arguments[0].indexOf('webgl') >= 0 && window._hydGLContexts.has(context) === false) {
        window._hydGLContexts.add(context);
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
        spector.startCapture(gl, 1_000_000, true);
    }
}

function hydSpectorNextFrame() {
    for (const [spector, gl] of window._hydSpectorContexts) {
        spector.captureNextFrame(gl, false);
    }
}

function hydSpectorStop() {
    let ret = [];
    for (const [spector, gl] of window._hydSpectorContexts) {
        ret.push(hydCompress(spector.stopCapture()));
    }
    return ret;
}