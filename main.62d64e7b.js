parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var r=document.querySelector("tbody").rows,e=document.querySelector(".game-score"),t=document.querySelector(".start"),n=document.querySelector(".message-start"),a=document.querySelector(".message-win"),o=document.querySelector(".message-lose"),s=4,c=4,i=0,d=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];function f(r,e){r.innerText="",r.classList.value="",r.classList.add("field-cell"),e>0&&(r.innerText=String(e),r.classList.add("field-cell--".concat(String(e))))}function u(){for(var t=0;t<s;t++)for(var n=0;n<c;n++){f(r[t].cells[n],d[t][n])}e.innerText=String(i)}function l(){for(var r=0;r<s;r++)for(var e=0;e<c;e++)if(0===d[r][e])return!0;return!1}function v(){if(l())for(var r=Math.random()>.1?2:4,e=!1;!e;){var t=Math.floor(Math.random()*s),n=Math.floor(Math.random()*c);0===d[t][n]&&(d[t][n]=r,e=!0,u())}}function m(r){return r.filter(function(r){return 0!==r})}function h(r){for(var e=m(r),t=0;t<r.length-1;t++)e[t]===e[t+1]&&isFinite(e[t])&&(e[t]*=2,e[t+1]=0,i+=e[t],q(e[t]));for(e=m(e);e.length<c;)e.push(0);return e}function L(){for(var r=0;r<s;r++){var e=d[r];e=h(e),d[r]=e}u()}function S(){for(var r=0;r<s;r++){var e=d[r];e.reverse(),(e=h(e)).reverse(),d[r]=e}u()}function g(){for(var r=0;r<c;r++){var e=[d[0][r],d[1][r],d[2][r],d[3][r]];e=h(e);for(var t=0;t<c;t++)d[t][r]=e[t]}u()}function w(){for(var r=0;r<c;r++){var e=[d[0][r],d[1][r],d[2][r],d[3][r]];e.reverse(),(e=h(e)).reverse();for(var t=0;t<c;t++)d[t][r]=e[t]}u()}function y(){for(var r=!1,e=0;e<s;e++)for(var t=0;t<c;t++)e<3&&(d[e][t]!==d[e+1][t]&&d[e][t]!==d[e][t+1]||(r=!0));return!(!r&&!l())}function q(r){2048===r&&(a.classList.remove("hidden"),t.classList.remove("restart"),t.innerText="Start")}function x(){o.classList.remove("hidden"),t.classList.remove("restart"),t.innerText="Start"}t.addEventListener("click",function(){d=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],i=0,u(),v(),v(),n.classList.add("hidden"),a.classList.add("hidden"),o.classList.add("hidden"),t.classList.add("restart"),t.innerText="Restart"}),document.addEventListener("keyup",function(r){switch(t.classList.contains("restart")){case"ArrowLeft"===r.code:L(),v();break;case"ArrowRight"===r.code:S(),v();break;case"ArrowUp"===r.code:g(),v();break;case"ArrowDown"===r.code:w(),v()}y()||x()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.62d64e7b.js.map