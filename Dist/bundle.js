!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=4)}([function(t,n,r){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var r=function(t,n){var r=t[1]||"",e=t[3];if(!e)return r;if(n&&"function"==typeof btoa){var o=(a=e,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=e.sources.map((function(t){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(t," */")}));return[r].concat(i).concat([o]).join("\n")}var a,c,s;return[r].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(t,r,e){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(e)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);e&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),n.push(s))}},n}},function(t,n,r){var e=r(2),o=r(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};e(o,i);t.exports=o.locals||{}},function(t,n,r){"use strict";var e,o=function(){return void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e},i=function(){var t={};return function(n){if(void 0===t[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[n]=r}return t[n]}}(),a=[];function c(t){for(var n=-1,r=0;r<a.length;r++)if(a[r].identifier===t){n=r;break}return n}function s(t,n){for(var r={},e=[],o=0;o<t.length;o++){var i=t[o],s=n.base?i[0]+n.base:i[0],u=r[s]||0,l="".concat(s," ").concat(u);r[s]=u+1;var d=c(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:l,updater:h(f,n),references:1}),e.push(l)}return e}function u(t){var n=document.createElement("style"),e=t.attributes||{};if(void 0===e.nonce){var o=r.nc;o&&(e.nonce=o)}if(Object.keys(e).forEach((function(t){n.setAttribute(t,e[t])})),"function"==typeof t.insert)t.insert(n);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,d=(l=[],function(t,n){return l[t]=n,l.filter(Boolean).join("\n")});function f(t,n,r,e){var o=r?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(t.styleSheet)t.styleSheet.cssText=d(n,o);else{var i=document.createTextNode(o),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}function p(t,n,r){var e=r.css,o=r.media,i=r.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}var g=null,m=0;function h(t,n){var r,e,o;if(n.singleton){var i=m++;r=g||(g=u(n)),e=f.bind(null,r,i,!1),o=f.bind(null,r,i,!0)}else r=u(n),e=p.bind(null,r,n),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else o()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var r=s(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var e=0;e<r.length;e++){var o=c(r[e]);a[o].references--}for(var i=s(t,n),u=0;u<r.length;u++){var l=c(r[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}r=i}}}},function(t,n,r){"use strict";r.r(n);var e=r(0),o=r.n(e)()(!1);o.push([t.i,'html body * {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nhtml body {\r\n\tbackground-color: #141414;\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n}\r\n\r\nbody,\r\n.container {\r\n\theight: 100vh;\r\n\tmargin: auto;\r\n\tuser-select: none;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\n.container h1 {\r\n\tfont-size: 30px;\r\n\ttext-align: center;\r\n\tcolor: white;\r\n\tmargin: 70px 0 30px;\r\n\tfont-family: "Codystar", cursive;\r\n}\r\n\r\n.imgContainer {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n.left {\r\n\tbackground-color: #202020;\r\n\tpadding: 20px;\r\n\tborder-radius: 80px;\r\n}\r\n\r\n.borderLeft,\r\n.borderRight {\r\n\tpadding: 2px;\r\n\tborder-radius: 80px;\r\n\tbackground: linear-gradient(to bottom right, #1180ff, #ff1ec7);\r\n\tbox-shadow: 5px 10px 30px #000000;\r\n}\r\n\r\n.borderRight {\r\n\tbackground: linear-gradient(to bottom right, #ffff5d, #1180ff);\r\n}\r\n\r\n.suwit {\r\n\tbackground-color: #141414;\r\n\tborder: 2px solid black;\r\n\tborder-radius: 50%;\r\n\tpadding: 10px;\r\n\tmargin: 20px 0;\r\n\ttransition: all 0.3s;\r\n\tcursor: pointer;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n.left .suwit:active {\r\n\ttop: 2px;\r\n}\r\n\r\n.left .suwit img,\r\n.right .suwit img {\r\n\theight: 50px;\r\n\twidth: 50px;\r\n\tborder-radius: 50%;\r\n}\r\n\r\n.left .suwit.imgGunting:hover {\r\n\tbox-shadow: 1px 1px 20px #ffff5d;\r\n\ttransform: scale(0.95);\r\n}\r\n\r\n.left .suwit.imgKertas:hover {\r\n\tbox-shadow: 1px 1px 20px #1180ff;\r\n\ttransform: scale(0.95);\r\n}\r\n\r\n.left .suwit.imgBatu:hover {\r\n\tbox-shadow: 1px 1px 20px #ff1ec7;\r\n\ttransform: scale(0.95);\r\n}\r\n\r\n.center {\r\n\theight: 93px;\r\n\twidth: 93px;\r\n\tbackground-color: #141414;\r\n\tborder: 2px solid #ffffff;\r\n\tbox-shadow: 5px 5px 20px #000000;\r\n\tborder-radius: 50%;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin: 20px;\r\n\tfont-family: "Poppins", sans-serif;\r\n}\r\n\r\n.right {\r\n\tbackground-color: #202020;\r\n\tpadding: 20px;\r\n\tborder-radius: 80px;\r\n\theight: 335px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\np.info {\r\n\tmargin: 0 20px;\r\n\tcolor: white;\r\n\tfont-weight: 600;\r\n\tfont-size: 11px;\r\n\tfont-family: "Cinzel Decorative", cursive;\r\n}\r\n\r\n.overlay {\r\n\tposition: absolute;\r\n\theight: 100vh;\r\n\twidth: 100vw;\r\n\tbackground-color: #00000088;\r\n\ttransition: all 0.7s;\r\n\tz-index: 99;\r\n}\r\n\r\n.overlay.on {\r\n\ttransform: translate(0, -800px);\r\n}\r\n\r\np.start {\r\n\tdisplay: inline-block;\r\n\twidth: 70px;\r\n\theight: 25px;\r\n\tmargin-top: 100px;\r\n\tline-height: 25px;\r\n\tpadding-left: 10px;\r\n\tbackground-color: white;\r\n\tborder-top-right-radius: 3px;\r\n\tborder-bottom-right-radius: 3px;\r\n\tcursor: pointer;\r\n}\r\n\r\np.start:active {\r\n\ttransform: scale(0.95);\r\n}\r\n\r\n.skor {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n.skor h3 {\r\n\tcolor: white;\r\n\tfont-size: 15px;\r\n}\r\n',""]),n.default=o},function(t,n,r){"use strict";r.r(n);var e=()=>{const t=document.querySelector(".overlay");document.querySelector(".overlay p.start").addEventListener("click",(function(){t.classList.add("on"),function(){const n=document.getElementById("detik"),o=setInterval(()=>{n.textContent--,"0"==n.textContent&&(!function(){let t;t=r.textContent>e.textContent?"YEE KAMU MENANG!":r.textContent<e.textContent?"KAMU KALAH :( COBA LAGI YAA":"KALI INI SERI!";c.textContent=t}(),n.textContent="10",t.classList.remove("on"),clearInterval(o))},1e3)}(),c.textContent="",r.textContent=0,e.textContent=0}));const n=document.querySelectorAll(".left img"),r=document.querySelector(".skor h3.player"),e=document.querySelector(".skor h3.com");let o,i=0,a=0;let c=document.getElementById("hasil-akhir");n.forEach((function(t){t.addEventListener("click",(function(){const n=function(){const t=Math.random();return t<.34?"Gunting":t>.34&&t<.66?"Kertas":"Batu"}(),c=t.className;var s,u;o=(u=c)==(s=n)?"SERI!":"Kertas"==u?"Batu"==s?"MENANG!":"KALAH!":"Gunting"==u?"Kertas"==s?"MENANG!":"KALAH!":"Batu"==u?"Gunting"==s?"MENANG!":"KALAH!":void 0,function(){const t=document.querySelector(".imgKomputer img"),n=["Kertas","Gunting","Batu"];let r=0;const e=(new Date).getTime();setInterval((function(){(new Date).getTime()-e>1e3?clearInterval:(t.setAttribute("src","../App/img/"+n[r++]+".png"),r==n.length&&(r=0))}),100)}();const l=document.querySelector(".imgKomputer img");setTimeout((function(){l.setAttribute("src","../App/img/"+n+".png");const t=document.querySelector(".center p");t.innerHTML=o,t.style.color="SERI!"==o?"yellow":"MENANG!"==o?"green":"red","MENANG!"==o?(i++,r.textContent=i):"KALAH!"==o&&(a++,e.textContent=a)}),1e3)}))}))};r(1);document.addEventListener("DOMContentLoaded",e)}]);