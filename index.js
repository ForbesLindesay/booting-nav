var classes = require('classes');
var scroll = require('./scroll');

//scroll.onWheel(move);
//scroll.onGesture(move);
scroll.onScroll(move);
//scroll.onOffsetChange(move);

function move() {
    var scrollTop = scroll.scrollTop();
    //console.log(e.deltaY);
    console.log(scrollTop);
}


function getTop(element) {
    var box = element.getBoundingClientRect();
    var clientTop  = document.documentElement.clientTop  || document.body.clientTop  || 0;
    var scrollTop  = scroll.scrollTop();
    return box.top  + scrollTop  - clientTop;
};

module.exports = subnav;
function subnav(element, offset, cls) {
    if (!cls && typeof offset = 'string') {
        cls = offset;
        offset = 0;
    }
    offset = offset || 0;
    cls = cls || 'navbar-fixed-top';
    var dataTop = getTop(element);
    classes(element).add('booting-sub-nav');
    scroll.onScroll(function(){
        if (dataTop - offset <= scroll.scrollTop())
            classes(element).add(cls);
        else
            classes(element).remove(cls);
    });
}