var prefix = "", _addEventListener, support;

// detect event model
if (window.addEventListener) {
    _addEventListener = "addEventListener";
} else {
    _addEventListener = "attachEvent";
    prefix = "on";
}

// detect available wheel event
if (document.onmousewheel !== undefined) {
    // Webkit and IE support at least "mousewheel"
    support = "mousewheel"
}
try {
    // Modern browsers support "wheel"
    WheelEvent("wheel");
    support = "wheel";
} catch (e) {}
if (!support) {
    // let's assume that remaining browsers are older Firefox
    support = "DOMMouseScroll";
}

module.exports.onScroll = function (callback) {
    window[_addEventListener](prefix  + 'scroll', callback, false);
    window[_addEventListener](prefix + 'gesturechange', callback, false);
    window[_addEventListener](prefix + support, callback, false);
    // handle MozMousePixelScroll in older Firefox
    if (support == "DOMMouseScroll") {
        window[_addEventListener](prefix + 'MozMousePixelScroll', callback, false);
    }
};

if (window.pageYOffset !== undefined) {
    module.exports.scrollTop = function () {
        return window.pageYOffset;
    };
} else {
    module.exports.scrollTop = function () {
        return (document.documentElement || document.body.parentNode || document.body).scrollTop;
    };
}