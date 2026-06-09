// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2026-06-09
// @description  try to take over the world!
// @author       You
// @match        https://svrforum.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=svrforum.com
// @grant        none
// @updateURL    https://raw.githubusercontent.com/kwg0424/tm/refs/heads/main/svrforum.user.js
// @downloadURL  https://raw.githubusercontent.com/kwg0424/tm/refs/heads/main/svrforum.user.js
// ==/UserScript==

(function() {
    'use strict';

    const content = document.querySelector('body > div.sl-layout');
    if (content && !content.classList.contains('bc-black')) {
        changeMode('db_lotus');
    }
})();
