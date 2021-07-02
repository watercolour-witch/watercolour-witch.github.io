!function(t,n){"use strict";"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?module.exports=n():t.Headroom=n()}(this,function(){"use strict";function t(t){this.callback=t,this.ticking=!1}function n(t){return t&&"undefined"!=typeof window&&(t===window||t.nodeType)}function o(t){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var i,e,s=t||{};for(e=1;e<arguments.length;e++){var r=arguments[e]||{};for(i in r)"object"!=typeof s[i]||n(s[i])?s[i]=s[i]||r[i]:s[i]=o(s[i],r[i])}return s}function i(t){return t===Object(t)?t:{down:t,up:t}}function e(t,n){n=o(n,e.options),this.lastKnownScrollY=0,this.elem=t,this.tolerance=i(n.tolerance),this.classes=n.classes,this.offset=n.offset,this.scroller=n.scroller,this.initialised=!1,this.onPin=n.onPin,this.onUnpin=n.onUnpin,this.onTop=n.onTop,this.onNotTop=n.onNotTop,this.onBottom=n.onBottom,this.onNotBottom=n.onNotBottom}var s={bind:!!function(){}.bind,classList:"classList"in document.documentElement,rAF:!!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame)};return window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,t.prototype={constructor:t,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},e.prototype={constructor:e,init:function(){return e.cutsTheMustard?(this.debouncer=new t(this.update.bind(this)),this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this):void 0},destroy:function(){var t=this.classes;this.initialised=!1,this.elem.classList.remove(t.unpinned,t.pinned,t.top,t.notTop,t.initial),this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var t=this.elem.classList,n=this.classes;!t.contains(n.pinned)&&t.contains(n.unpinned)||(t.add(n.unpinned),t.remove(n.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var t=this.elem.classList,n=this.classes;t.contains(n.unpinned)&&(t.remove(n.unpinned),t.add(n.pinned),this.onPin&&this.onPin.call(this))},top:function(){var t=this.elem.classList,n=this.classes;t.contains(n.top)||(t.add(n.top),t.remove(n.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var t=this.elem.classList,n=this.classes;t.contains(n.notTop)||(t.add(n.notTop),t.remove(n.top),this.onNotTop&&this.onNotTop.call(this))},bottom:function(){var t=this.elem.classList,n=this.classes;t.contains(n.bottom)||(t.add(n.bottom),t.remove(n.notBottom),this.onBottom&&this.onBottom.call(this))},notBottom:function(){var t=this.elem.classList,n=this.classes;t.contains(n.notBottom)||(t.add(n.notBottom),t.remove(n.bottom),this.onNotBottom&&this.onNotBottom.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},getViewportHeight:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},getElementPhysicalHeight:function(t){return Math.max(t.offsetHeight,t.clientHeight)},getScrollerPhysicalHeight:function(){return this.scroller===window||this.scroller===document.body?this.getViewportHeight():this.getElementPhysicalHeight(this.scroller)},getDocumentHeight:function(){var t=document.body,n=document.documentElement;return Math.max(t.scrollHeight,n.scrollHeight,t.offsetHeight,n.offsetHeight,t.clientHeight,n.clientHeight)},getElementHeight:function(t){return Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)},getScrollerHeight:function(){return this.scroller===window||this.scroller===document.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(t){var n=0>t,o=t+this.getScrollerPhysicalHeight()>this.getScrollerHeight();return n||o},toleranceExceeded:function(t,n){return Math.abs(t-this.lastKnownScrollY)>=this.tolerance[n]},shouldUnpin:function(t,n){var o=t>this.lastKnownScrollY,i=t>=this.offset;return o&&i&&n},shouldPin:function(t,n){var o=t<this.lastKnownScrollY,i=t<=this.offset;return o&&n||i},update:function(){var t=this.getScrollY(),n=t>this.lastKnownScrollY?"down":"up",o=this.toleranceExceeded(t,n);this.isOutOfBounds(t)||(t<=this.offset?this.top():this.notTop(),t+this.getViewportHeight()>=this.getScrollerHeight()?this.bottom():this.notBottom(),this.shouldUnpin(t,o)?this.unpin():this.shouldPin(t,o)&&this.pin(),this.lastKnownScrollY=t)}},e.options={tolerance:{up:0,down:0},offset:0,scroller:window,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"}},e.cutsTheMustard="undefined"!=typeof s&&s.rAF&&s.bind&&s.classList,e});