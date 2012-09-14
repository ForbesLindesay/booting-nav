var classes = require('classes');
var scroll = require('./scroll');

function getTop(element) {
    var box = element.getBoundingClientRect();
    var clientTop  = document.documentElement.clientTop  || document.body.clientTop  || 0;
    var scrollTop  = scroll.scrollTop();
    return box.top  + scrollTop  - clientTop;
};

module.exports = subnav;
function subnav(element, offset, cls) {
    if (!cls && typeof offset === 'string') {
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