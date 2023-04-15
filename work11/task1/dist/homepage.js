(()=>{"use strict";var n,o,t,e,i,r,p,a,s,x,l,d,c,u,h={285:(n,o,t)=>{t.d(o,{Z:()=>c});var e=t(81),i=t.n(e),r=t(645),p=t.n(r),a=t(667),s=t.n(a),x=new URL(t(192),t.b),l=p()(i()),d=s()(x);l.push([n.id,"body{\n    margin: 0;\n    background: rgb(246,246,246);\n}\n.app-header{\n    width: 100%;\n    height: 52px;\n    background: #fff;\n    position: relative;\n    box-shadow: 0px 1px 5px 0px lightgray;\n\n}\n.app-header-inner{\n    width: 1300px;\n    height: 52px;\n    padding: 0 16px;\n    background: white;\n    margin: 0 auto;\n    position: relative;\n}\n.sticky-holder{\n    position: fixed;\n    width: 100%;\n    height: 52px;\n    background: white;\n    top: -52px;\n    z-index: 1;\n    box-shadow: 0px 1px 5px 0px lightgray;\n\n}\n.avator-menu {  \n    position: fixed;\n    right: 220px;\n    top: 45px;\n    visibility: hidden;\n\n}\n.avator-arrow { \n    width: 40px;\n    height: 40px;\n    transform: rotate(45deg);\n    position: absolute;\n    z-index: 4;\n    right: 40px;\n    top: 0px;\n    background-color: white;\n    box-shadow: 0px 1px 5px 0px lightgray;\n\n}\n.avator-menu-content {  \n    position: absolute;\n    width: 118px;\n    height: 120px;\n    right: 0px;\n    top: 0px;\n    background-color: white;\n    z-index: 4;\n    opacity: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content:center;\n    box-shadow: 0px 1px 5px 0px lightgray;\n\n\n}\n.avator-menu-content a {    \n    color: rgb(135,144,164);\n    text-decoration: none;\n    height: 40px;\n    box-sizing: border-box;\n    font-size: 14px;\n    padding-top: 12px;\n    padding-left: 18px;\n    vertical-align: middle;\n}\na svg { \n    transform: translateY(2px);\n}\n.app-content{\n    display: flex;\n    align-items: flex-start; \n    width: 1000px;\n    padding: 0 16px;\n    margin: 10px auto;\n    background: rgb(246,246,246);\n}\n.story-container{\n    width: 700px;\n    height: 10000px;\n    padding-bottom: 20px;\n    background: white;\n    box-shadow: 0px 1px 5px 0px lightgray;\n\n}\n.app-main-column{\n    margin-right: 10px;\n}\n.side-bar{\n    width: 300px; \n    height: 330px;\n    background: white;\n    box-shadow: 0px 1px 5px 0px lightgray;\n}\n.story-container-header {   \n    position: relative;\n    width: 700px;\n    border: none;\n    border-bottom: solid 0.5px;\n    border-color: rgb(240,242,246);\n    height: 60px;\n}\n.follow {   \n    position: absolute;\n    left: 25px;\n    top: 22px;\n    font-size: 16px;\n    cursor: pointer;\n}\n.innerFollow {   \n    position: absolute;\n    left: 380px;\n    top: 15px;\n    font-size: 16px;\n    cursor: pointer;\n    bottom: 40px;\n}\n.introduce {   \n    position: absolute;\n    left: 100px;\n    top: 22px;\n    font-size: 16px;\n    cursor: pointer;\n\n}\n.innerIntroduce {   \n    position: absolute;\n    left: 455px;\n    top: 15px;\n    font-size: 16px;\n    cursor: pointer;\n    bottom: 40px;\n}\n.hot {   \n    position: absolute;\n    left: 175px;\n    top: 22px;\n    font-size: 16px;\n    cursor: pointer;\n\n}\n.innerHot {   \n    position: absolute;\n    left: 530px;\n    top: 15px;\n    font-size: 16px;\n    cursor: pointer;\n    bottom: 40px;\n}\n.visual {   \n    position: absolute;\n    left: 250px;\n    top: 22px;\n    font-size: 16px;\n    cursor: pointer;\n\n}\n.innerVisual {   \n    position: absolute;\n    left: 605px;\n    top: 15px;\n    font-size: 16px;\n    cursor: pointer;\n    bottom: 40px;\n}\n.header         { \n    width: 80px;\n    height: 43px;\n    position: absolute;\n    top: 5px;\n    left: 60px;\n    cursor: pointer;\n}\n.innerHeader {  \n    width: 80px;\n    height: 43px;\n    position: absolute;\n    top: 5px;\n    left: 250px;\n    cursor: pointer;\n\n}\n.avator {   \n    width: 30px;\n    height: 30px;\n    position: absolute;\n    top: 10px;\n    right: 80px;\n    cursor: pointer;\n    background-image: url("+d+");\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.homePage { \n    width: 50px;\n    height: 30px;\n    position: absolute;\n    left: 160px;\n    bottom: 0px;\n    border: none;\n    border-bottom: solid 4px;\n    border-color: blue;\n    text-align: center;\n    font-size: 15px;\n    margin-bottom: 5px;\n    cursor: pointer;\n    font-weight: bold;\n\n}\n.study {    \n    width: 50px;\n    height: 30px;\n    position: absolute;\n    left: 225px;\n    bottom: 4px;\n    color: gray;\n    border: none;\n    /* border-bottom: solid 5px;\n    border-color: blue; */\n    text-align: center;\n    font-size: 15px;\n    margin-bottom: 5px;\n    cursor: pointer;\n\n\n}\n.vip {  \n    width: 50px;\n    height: 30px;\n    position: absolute;\n    left: 290px;\n    bottom: 4px;\n    color: gray;\n    border: none;\n    /* border-bottom: solid 5px;\n    border-color: blue; */\n    text-align: center;\n    font-size: 15px;\n    margin-bottom: 5px;\n    cursor: pointer;\n\n\n}\n.finding {  \n    width: 50px;\n    height: 30px;\n    position: absolute;\n    left: 355px;\n    bottom: 4px;\n    color: gray;\n    border: none;\n    /* border-bottom: solid 5px;\n    border-color: blue; */\n    text-align: center;\n    font-size: 15px;\n    margin-bottom: 5px;\n    cursor: pointer;\n\n}\n.answer {\n    width: 80px;\n    height: 30px;\n    position: absolute;\n    left: 420px;\n    bottom: 4px;\n    color: gray;\n    border: none;\n    /* border-bottom: solid 5px;\n    border-color: blue; */\n    text-align: center;\n    font-size: 15px;\n    margin-bottom: 5px;\n    cursor: pointer;\n\n\n}\n.search {   \n    width: 400px;\n    height: 30px;\n    position: absolute;\n    left: 560px;\n    bottom: 10px;\n    border-radius: 15px;\n    border: solid 0.5px;\n    border-color: lightgray;\n    background-color: rgb(246,246,246);\n    outline: none;\n\n}\n.innerSearch {   \n    width: 300px;\n    height: 30px;\n    position: absolute;\n    left: 1050px;\n    bottom: 10px;\n    border-radius: 15px;\n    border: solid 0.5px;\n    border-color: lightgray;\n    background-color: rgb(246,246,246);\n    outline: none;\n\n}\n.mirror {  \n    width: 25px;\n    height: 25px;\n    position: absolute;\n    left: 930px;\n    bottom: 14px;\n    cursor: pointer;\n}\n.innerMirror {  \n    width: 25px;\n    height: 25px;\n    position: absolute;\n    left: 1320px;\n    bottom: 14px;\n    cursor: pointer;\n}\n.question {   \n    position: absolute;\n    left: 990px;\n    width: 65px;\n    height: 34px;\n    bottom: 10px;\n    color: white;\n    background-color: rgb(47,107,224);\n    border-radius:17px;\n    border: none;\n    text-align: center;\n    cursor: pointer;\n    \n}\n.innerQuestion {    \n    position: absolute;\n    left: 1370px;\n    width: 65px;\n    height: 34px;\n    bottom: 10px;\n    color: white;\n    background-color: rgb(47,107,224);\n    border-radius:17px;\n    border: none;\n    text-align: center;\n    cursor: pointer;\n}\n.center {       \n    width: 30px;\n    height: 30px;\n    position: absolute;\n    left: 10px;\n    top: 15px;\n}\n.side-bar-header{   \n    width: 300px;\n    height: 30px;\n    position: relative;\n   \n}\n.writing-center {   \n    position: absolute;\n    height: 30px;\n    top: 20px;\n    left: 40px;\n    text-align: center;\n    font-size: 14px;\n}\n.box {\n    color:gray;\n    font-size: 8px;\n    position: absolute;\n    right: 5px;\n    top: 20px;\n}\n.side-bar-main {    \n    position: relative;\n    width: 300px;\n    height: 250px;\n\n}\n.answering-question {   \n    position: absolute;\n    left: 28px;\n    top: 35px;\n    cursor: pointer;\n\n}\n.posting-video {    \n    position: absolute;\n    left: 96px;\n    top: 35px;\n    cursor: pointer;\n\n}\n.writing-passages {    \n    position: absolute;\n    right: 96px;\n    top: 35px;\n    cursor: pointer;\n\n}\n.writing-thoughts {    \n    position: absolute;\n    right: 28px;\n    top: 35px;\n    cursor: pointer;\n\n}\n.answering-question-text {  \n    position: absolute;\n    left: 24px;\n    top: 85px;\n    font-size: 10px;\n}\n.posting-video-text {   \n    position: absolute;\n    left: 98px;\n    top: 85px;\n    font-size: 10px;\n}\n.writing-passages-text {   \n    position: absolute;\n    right:96px;\n    top: 85px;\n    font-size: 10px;\n}\n.writing-thoughts-text {   \n    position: absolute;\n    right: 30px;\n    top: 85px;\n    font-size: 10px;\n}\n.side-bar-rooter {  \n    position: relative;\n    width: 300px;\n    height: 50px;\n}\n.side-bar-main-create { \n    position: absolute;\n    width: 252px;\n    height: 40px;\n    bottom: 10px;\n    left: 24px;\n    background-color: white;\n    border: solid 1px;\n    border-color:rgb(59,116,226);\n    text-align: center;\n    color: rgb(59,116,226);\n    border-radius: 5px;\n    font-size: 14px;\n    cursor: pointer;\n}\n.plus { \n    position: absolute;\n    left: 80px;\n}\n.recommend {    \n    width: 260px;\n    height: 100px;\n    background-color: rgb(246,246,246);\n    position: absolute;\n    right: 20px;\n    bottom: 25px;\n    border-radius: 2px;\n}\n.recommend-header { \n    margin-top: 18px;\n    margin-left: 10px;\n    font-size: 15px;\n}\n.recommend-content {    \n    color: gray;\n    font-size: 12px;\n    margin-left: 10px;\n    margin-top: 10px;\n    width: 160px;\n    position: relative;\n}\n.recommend-dog {    \n    width: 60px;\n    height: 60px;\n    position: absolute;\n    right: 40px;\n    bottom: 50px;\n}\n.answering-question-g { \n    fill: #06F;\n}\n.posting-video-g { \n    fill:#FF9607;\n}\n.writing-passages-g {\n    fill: #F4C807;\n}\n.writing-thoughts-g {   \n    fill: #26BFBF;\n    \n}\n.back { \n    width: 40px;\n    height: 40px;\n    background-color: white;\n    position: fixed;\n    right: 20px;\n    bottom: -50px;\n    border: none;\n    cursor: pointer;\n    border-radius: 2px;\n    box-shadow: 0px 1px 5px 0px lightgray;\n    /* display: none; */\n\n}\n.mask {\n    position: fixed;\n    left: 0px;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n    font-size: 16px;\n    background-color: rgba(0,0,0,0.6);\n    visibility: hidden;\n  }\n  .popup {  \n    width: 520px;\n    height: 340px;\n    margin: 0 auto;\n    margin-top: 200px;\n    background-color: white;\n    border-radius: 2px;\n    position: relative;\n    bottom: 0px;\n    z-index: 10;\n    \n  }\n  .popup-avator {   \n    width: 40px;\n    height: 40px;\n    position: absolute;\n    top: 35px;\n    left: 25px;\n    background-image: url("+d+");    \n    background-repeat: no-repeat;\n    background-size: cover;\n  }\n  .popup-anonymous {    \n    color: rgb(135,144,164);\n    position: absolute;\n    left: 50px;\n    bottom: 45px;\n    font-size: 16px;\n    cursor: pointer;\n  }\n.popup-check {  \n    position: absolute;\n    bottom: 45px;\n    left: 25px;\n    cursor: pointer;\n}\n.popup-publish {    \n    position: absolute;\n    right: 20px;\n    bottom: 45px;\n    width: 100px;\n    height: 35px;\n    border-radius: 3px;\n    background-color: #06F;\n    border: none;\n    color: white;\n    font-weight: 100;\n    opacity: 0.5;\n}\n.popup-write {  \n    position: absolute;\n    background-color: white;\n    font-size: 16px;\n    left: 80px;\n    top: 35px;   \n    resize: none; \n    border: none;\n    outline: none;\n    width: 410px;\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 1.34;\n    font-family: inherit;\n}\n.popup-alert {  \n    position: absolute;\n    color: red;\n    font-size: 16px;\n    right: 20px;\n    top: 60px;\n    display: none;\n}\n.shut{  \n    width: 24px;\n    height: 24px;\n    right: 530px;\n    position: absolute;\n    top: 220px;\n    cursor: pointer;\n}\n.filefield {    \n    max-height: 78px;\n    height: 78px;\n    background-color: white;\n    bottom: 120px;\n    border-radius: 2px;\n    outline: none;\n    overflow: auto;\n\n}\n.toolfield {    \n    position: absolute;\n    left: 25px;\n    right: 25px;\n    top: 100px;\n    height: 32px;\n    overflow: hidden;\n}\n.plain {    \n    background-color: white;\n    color: #26BFBF;\n    border: none;\n    position: relative;\n}\n#inputA {   \n    opacity: 0;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    width: 24px;\n    height: 24px;\n    cursor: pointer;\n}\n#inputB {   \n    opacity: 0;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    width: 24px;\n    height: 24px;\n    cursor: pointer;\n}\n.stylefield {   \n    height: 40px;\n    width: 100%;\n    display: none;\n    border-bottom:solid 1px lightgray;\n    padding-top: 5px;\n}\n.filesfield {   \n    position: absolute;\n    top: 140px;\n    left: 25px;\n    right: 25px;\n    bottom: 100px;\n    border: solid 1px lightgray;\n}\nblockquote {    \n    border-left: 3px solid #d3d3d3;\n    color: #646464;\n    margin: 1.4em 0;\n    padding-left: 1em;\n    display: block;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    height: 20px;\n    padding-top: 5px;\n}\npre {   \n    background: #f6f6f6;\n    border-radius: 4px;\n    font-size: .9em;\n    overflow: auto;\n    margin-left: 1.4em;\n    margin-right: 1.4em;\n    height: 20px;\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n\nhr {    \n    /* color: yellow; */\n    margin-top: 30 px;\n    margin-bottom: 30px;\n    color: #26BFBF;\n    margin-left: 30px;\n    margin-right: 30px;\n}\nbutton label {  \n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    width: 100%;\n    height: 100%;\n    display: block;\n    opacity: none;\n}\n.post-A-container { \n    z-index: 20;\n    width: 100%;\n    height: 100%;\n}\n.maskA {    \n    position: fixed;\n    left: 0px;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n    font-size: 16px;\n    visibility: hidden;\n    background-color: rgb(0,0,0,0.6);\n\n}\n.Modal-inner {  \n    overflow: auto;\n    border-radius: 2px;\n    background-color: #fff;\n    width: 400px;\n    box-sizing: border-box;\n    margin: auto;\n    z-index: 20;\n    margin-top: 200px;\n}\n.Modal-inner h3 {   \n    color: #121212;\n    font-size: 24px;\n    font-weight: 500;\n    margin-top: 40px;\n    text-align: center;\n}\n.Modal-content {    \n    line-height: 1.7;\n    margin-top: 24px;\n    opacity: 1;\n    padding-left: 24px;\n    padding-right: 24px;\n    padding-bottom: 32px;\n    align-items: center;\n    text-align: center;\n}\n.linkModal {    \n    padding: 6px 12px;\n    height: auto;\n    background: #fff;\n    border: 1px solid #ebebeb;\n    color: rgb(135,144,164);\n    align-items: flex-start;\n    display: flex;\n    margin-top: 10px;\n}\n\n.Input {    \n    padding-top: 2px;\n    resize: none;\n    font-size: 14px;\n    margin-left: 0px;\n    outline: none;\n    color: #121212;\n    height: 24px;\n    line-height: 24px;\n    border: none;\n    box-sizing: border-box;\n}\n.ModalButtonGroup { \n    margin-top: 50px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n.Button--grey {  \n    border-color: #8590a6;\n    color: #8590a6;\n    border: 1px solid;\n    border-radius: 3px;\n    cursor: pointer;\n    font-size: 14px;\n    line-height: 32px;\n    text-align: center;\n    width: 168px;\n    background-color: white;\n}\n.Button--blue { \n    border: 1px solid;\n    border-radius: 3px;\n    font-size: 14px;\n    line-height: 32px;\n    text-align: center;\n    color: white;\n    background-color: #06F;\n    width: 168px;\n    opacity: 0.5;\n}\n.separator {    \n\n   background-color: #ebebeb;\n    height: 20px;\n    margin: 0 10px;\n    width: 1px;\n    display: inline-block;\n}",""]);const c=l},645:n=>{n.exports=function(n){var o=[];return o.toString=function(){return this.map((function(o){var t="",e=void 0!==o[5];return o[4]&&(t+="@supports (".concat(o[4],") {")),o[2]&&(t+="@media ".concat(o[2]," {")),e&&(t+="@layer".concat(o[5].length>0?" ".concat(o[5]):""," {")),t+=n(o),e&&(t+="}"),o[2]&&(t+="}"),o[4]&&(t+="}"),t})).join("")},o.i=function(n,t,e,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var p={};if(e)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(p[s]=!0)}for(var x=0;x<n.length;x++){var l=[].concat(n[x]);e&&p[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),o.push(l))}},o}},667:n=>{n.exports=function(n,o){return o||(o={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),o.hash&&(n+=o.hash),/["'() \t\n]|(%20)/.test(n)||o.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var o=[];function t(n){for(var t=-1,e=0;e<o.length;e++)if(o[e].identifier===n){t=e;break}return t}function e(n,e){for(var r={},p=[],a=0;a<n.length;a++){var s=n[a],x=e.base?s[0]+e.base:s[0],l=r[x]||0,d="".concat(x," ").concat(l);r[x]=l+1;var c=t(d),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==c)o[c].references++,o[c].updater(u);else{var h=i(u,e);e.byIndex=a,o.splice(a,0,{identifier:d,updater:h,references:1})}p.push(d)}return p}function i(n,o){var t=o.domAPI(o);return t.update(n),function(o){if(o){if(o.css===n.css&&o.media===n.media&&o.sourceMap===n.sourceMap&&o.supports===n.supports&&o.layer===n.layer)return;t.update(n=o)}else t.remove()}}n.exports=function(n,i){var r=e(n=n||[],i=i||{});return function(n){n=n||[];for(var p=0;p<r.length;p++){var a=t(r[p]);o[a].references--}for(var s=e(n,i),x=0;x<r.length;x++){var l=t(r[x]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}r=s}}},569:n=>{var o={};n.exports=function(n,t){var e=function(n){if(void 0===o[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}o[n]=t}return o[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},216:n=>{n.exports=function(n){var o=document.createElement("style");return n.setAttributes(o,n.attributes),n.insert(o,n.options),o}},565:(n,o,t)=>{n.exports=function(n){var o=t.nc;o&&n.setAttribute("nonce",o)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var o=n.insertStyleElement(n);return{update:function(t){!function(n,o,t){var e="";t.supports&&(e+="@supports (".concat(t.supports,") {")),t.media&&(e+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(e+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),e+=t.css,i&&(e+="}"),t.media&&(e+="}"),t.supports&&(e+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),o.styleTagTransform(e,n,o.options)}(o,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(o)}}}},589:n=>{n.exports=function(n,o){if(o.styleSheet)o.styleSheet.cssText=n;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(n))}}},192:(n,o,t)=>{n.exports=t.p+"74f9f1a6bc484cf7895d.jpeg"}},g={};function b(n){var o=g[n];if(void 0!==o)return o.exports;var t=g[n]={id:n,exports:{}};return h[n](t,t.exports,b),t.exports}b.m=h,b.n=n=>{var o=n&&n.__esModule?()=>n.default:()=>n;return b.d(o,{a:o}),o},b.d=(n,o)=>{for(var t in o)b.o(o,t)&&!b.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:o[t]})},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),b.o=(n,o)=>Object.prototype.hasOwnProperty.call(n,o),(()=>{var n;b.g.importScripts&&(n=b.g.location+"");var o=b.g.document;if(!n&&o&&(o.currentScript&&(n=o.currentScript.src),!n)){var t=o.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),b.p=n})(),b.b=document.baseURI||self.location.href,b.nc=void 0,n=b(379),o=b.n(n),t=b(795),e=b.n(t),i=b(569),r=b.n(i),p=b(565),a=b.n(p),s=b(216),x=b.n(s),l=b(589),d=b.n(l),c=b(285),(u={}).styleTagTransform=d(),u.setAttributes=a(),u.insert=r().bind(null,"head"),u.domAPI=e(),u.insertStyleElement=x(),o()(c.Z,u),c.Z&&c.Z.locals&&c.Z.locals})();