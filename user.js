// ==UserScript==
// @name         JumpLate
// @namespace    https://www.chree.banon.gq/jumplate
// @version      1
// @description  Custom Theme for JumpinChat
// @author       Chree Banon
// @match        https://jumpin.chat/*
// @exclude      https://jumpin.chat/thebanon
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_listValues
// @run-at       document-end
// @license      MIT
// @updateURL    https://github.com/thebanon/jumplate/raw/master/user.js
// @downloadURL  https://github.com/thebanon/jumplate/raw/master/user.js
// ==/UserScript==

var style = `<link href="https://github.com/thebanon/jumplate/raw/master/style.css" rel="stylesheet" type="text/css"></link>`;
var script = `<script src="https://github.com/thebanon/jumplate/raw/master/user.js"></script>`;

style ? document.head.insertAdjacentHTML('beforeend',style) : null;
script ? document.head.insertAdjacentHTML('beforeend',script) : null;

function ajax(url, settings) { //console.log(url,settings);
  return new Promise((resolve, reject) => { var req;
    if(settings && settings.dataType === 'POST') { req = new Request(url, { method: 'POST', body: (settings.data ? JSON.stringify(settings.data) : null), headers: new Headers() }); } else { req = url; }
    fetch(req).then(response => response.text()).then(res => { try { resolve(res); } catch(e) { resolve(e); } });
  });
}  
