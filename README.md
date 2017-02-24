# booting-nav

[![Greenkeeper badge](https://badges.greenkeeper.io/ForbesLindesay/booting-nav.svg)](https://greenkeeper.io/)

Intended to fix navigation to the top when it scrolls out of view (works great with bootstrap).  This library can easilly be used to add a class to something when it scrolls out of view, and remove the class when it scrolls back into view.

[![Dependency Status](https://img.shields.io/david/ForbesLindesay/booting-nav.svg)](https://david-dm.org/ForbesLindesay/booting-nav)
[![NPM version](https://img.shields.io/npm/v/booting-nav.svg)](https://www.npmjs.com/package/booting-nav)

## Usage

This library can be built to use standalone, just download the github repo and then do:

```console
$ npm install browserify -g
$ npm install
$ browserify index.js --standalone boot > boot.js
```

You can then use `boot` instead of `require('booting-nav')`.

Example usage:

```js
var boot = require('booting-nav')
var $ = document.getElementById.bind(document)

boot($('blue'))
boot($('red'), {offset: 40})
boot($('green'), {offset: 80})
boot($('orange'), {offset: 120, minWidth: '400px'})
```

This results in each block sticking to the top at the appropriate offset.  Then `minWidth` parameter is oftne useful for mobile layouts.

You can skip the auto-generated class and just have your own class used instead by adding the `cls` option:

```js
boot($('orange'), {cls: 'nav-fixed-top'})
```

## License

MIT