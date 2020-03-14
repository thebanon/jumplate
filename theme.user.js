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
// @updateURL    https://raw.githubusercontent.com/thebanon/jumplate/master/theme.user.js
// @downloadURL  https://raw.githubusercontent.com/thebanon/jumplate/master/theme.user.js
// ==/UserScript==

var style = document.createElement("link");
style.setAttribute("rel", "stylesheet");
style.setAttribute("type", "text/css");
style.setAttribute("href", "https://raw.githubusercontent.com/thebanon/jumplate/master/style.css");
document.head.appendChild(style);

var script = document.createElement("script");
script.setAttribute("src", "https://raw.githubusercontent.com/thebanon/jumplate/master/script.js");
document.head.appendChild(script);
