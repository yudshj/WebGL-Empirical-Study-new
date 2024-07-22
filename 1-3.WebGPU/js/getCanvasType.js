// inject CanvasElement.getContext() to get the type of canvas

window.aiPhie9cein7Thie_Map = new Map();
window.bozooch6abaiquaM_gpu = navigator.gpu;
window.cei3ieXi3zi8da2m = false;

navigator.__defineGetter__('gpu', function() {
    window.cei3ieXi3zi8da2m = true;
    return window.bozooch6abaiquaM_gpu;
});

(function() {
    var xohkah0I_originalGetContext = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function() {
        const context = xohkah0I_originalGetContext.apply(this, arguments);
        if (context) {
            window.aiPhie9cein7Thie_Map.set(this, arguments[0]);
        }
        return context;
    }
})();

window.koo7Gae7eire3Lit_getCounter = () => {
    const ret = {};
    for (const context_type of window.aiPhie9cein7Thie_Map.values()) {
        // if context not in ret, add it
        if (!ret[context_type]) {
            ret[context_type] = 1;
        } else {
            ret[context_type] += 1;
        }
    }
    ret['navigator.gpu'] = window.cei3ieXi3zi8da2m;
    return ret;
}