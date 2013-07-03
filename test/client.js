var nav = require('../')
var $ = document.getElementById.bind(document)

nav($('blue'))
nav($('red'), {offset: 40})
nav($('green'), {offset: 80})
nav($('orange'), {offset: 120, minWidth: '400px'})