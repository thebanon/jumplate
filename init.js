// ==UserScript==
// @name         JumpinPlates: reset.css
// @namespace    https://www.chree.banon.gq/jumplate
// @version      2020.10
// @description  Custom Theme for JumpinChat
// @author       Chree Banon
// @match        https://jumpin.chat/*
// @exclude      https://jumpin.chat/thebanon
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_listValues
// @run-at       document-end
// @license      MIT
// @updateURL    https://github.com/thebanon/jumplate/raw/master/script.js
// @downloadURL  https://github.com/thebanon/jumplate/raw/master/script.js
// ==/UserScript==

var style = document.createElement("link");
style.setAttribute("rel", "stylesheet");
style.setAttribute("type", "text/css");
style.setAttribute("href", "https://thebanon.github.io/jumplate/style.css");
document.head.appendChild(style);

var script = document.createElement("script");
script.setAttribute("src", "https://thebanon.github.io/jumplate/script.js");
document.head.appendChild(script);
