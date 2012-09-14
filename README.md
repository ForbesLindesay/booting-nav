booting-sub-nav
===============

Intended to fix subnav to the top when it scrolls out of view (works great with bootstrap).  This library can easilly be used to add a class to something when it scrolls out of view, and remove the class when it scrolls back into view.

## Using it stand-alone

Add a script tag for `booting-sub-nav.min.js` (which you can download from downloads), then use the following to use:

```javascript
bootingSubNav(document.getElementById('subnav'), offset, class);
```

```css
.booting-sub-nav.navbar-fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1020;
}
```

If you don't specify either offset or class or offset then `'navbar-fixed-top'` is used for class and `0` is used for offset.  The class `'booting-sub-nav'` is also added to all elements that are attached to subnav, regardless of whether they have scrolled out of view or not.

If you set a non-zero offset, you should remember to adjust top to compensate.  You will want to add an offset if this is an actual sub-nav, as the offset will be needed to account for the height of the main menu.