!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("CodeMirror")):"function"==typeof define&&define.amd?define(["CodeMirror"],n):"object"==typeof exports?exports["show-invisibles"]=n(require("CodeMirror")):e["show-invisibles"]=n(e.CodeMirror)}(this,function(e){return function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=2)}([function(n,t){n.exports=e},function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,n,t){"use strict";(function(e){var o,r,i,c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(u){"object"===c(n)&&"object"===c(e)?u(t(0)):(r=[t(0)],o=u,void 0!==(i="function"==typeof o?o.apply(n,r):o)&&(e.exports=i))}(function(e){function n(e){var n=document.createElement("style");n.setAttribute("data-name","js-show-invisibles");for(var t="",i="",c=1;c<=e;++c){i+="·";t+=".CodeMirror .cm-whitespace-"+c+'::before { content: "'+i+'";}\n'}n.textContent=o()+"\n"+r()+"\n"+t,document.head.appendChild(n)}function t(){var e=document.querySelector('[data-name="js-show-invisibles"]');document.head.removeChild(e)}function o(){return[".cm-whitespace::before {","position: absolute;","pointer-events: none;","color: #404F7D;","}"].join("")}function r(){return[".CodeMirror-code > div > pre > span::after, .CodeMirror-line > span::after {","pointer-events: none;","color: #404F7D;",'content: "¬"',"}"].join("")}e.defineOption("showInvisibles",!1,function(o,r,i){var c=0,u=o.getOption("maxInvisibles")||16;if(i===e.Init&&(i=!1),i&&!r)return o.removeOverlay("invisibles"),t();!i&&r&&(n(u),o.addOverlay({name:"invisibles",token:function(e){var n=0,t=" "===e.peek();if(t){for(;t&&n<u;)++n,e.next(),t=" "===e.peek();var o="whitespace whitespace-"+n;return n===u&&(o+=" whitespace-rand-"+c++),o}for(;!e.eol()&&!t;)e.next(),t=" "===e.peek();return"cm-eol"}}))})})}).call(n,t(1)(e))}])});
//# sourceMappingURL=show-invisibles.js.map