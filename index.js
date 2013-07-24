var scroll = require('./scroll')

function getTop(element) {
  var box = element.getBoundingClientRect()
  var clientTop = document.documentElement.clientTop || document.body.clientTop || 0
  var scrollTop = scroll.scrollTop()
  return box.top + scrollTop - clientTop
};

//@media (min-width: 1280px)

var clsIndex = 0
module.exports = subnav
function subnav(element, options) {
  options = options || {}
  var minWidth = options.minWidth || 0
  var offset = options.offset || 0
  var cls = options.cls
  if (!cls) {
    cls = 'booting-sub-nav-' + (clsIndex++)
    var style = '\n.' + cls + ' {\n' + styleAttrib('position', options.position, 'fixed') +
                styleAttrib('top', offset + 'px', 0) +
                styleAttrib('left', options.left, 0) +
                styleAttrib('right', options.right, 0) +
                styleAttrib('z-index', options['z-index'], 10000) + '}\n'
    if (minWidth) {
      style = '\n@media (min-width: ' + minWidth + ') {' + style + '}\n'
    }
    insertCSS(style)
  }
  var stuck = false
  var dataTop = getTop(element)
  scroll.onScroll(doScroll)
  function doScroll(){
    if (minWidth && screen.availWidth < minWidth) return
    if (!stuck && getTop(element) - offset <= scroll.scrollTop())
      stick()
    else if (stuck && dataTop - offset > scroll.scrollTop())
      release()
  }
  function stick() {
    stuck = true
    dataTop = getTop(element)
    element.classList.add(cls)
  }
  function release() {
    stuck = false
    element.classList.remove(cls)
  }
  doScroll()
}

function styleAttrib(name, value, def) {
  if (value === null) return ''
  return name + ': ' + (value === undefined ? def : value) + ';\n'
}

var style
function insertCSS(css) {
  var text = document.createTextNode(css)
  if (style) {
    return style.appendChild(text)
  }

  style = document.createElement('style')
  style.appendChild(text)
  document.head.appendChild(style)
}