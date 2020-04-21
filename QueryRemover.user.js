// ==UserScript==
// @name         Query Remover
// @namespace    https://github.com/taktheh/QueryRemover
// @version      0.1
// @description  Remove the query part of URL.
// @author       Takamaro the Hentai
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let l = window.location.href.split('?');
    if (l.length > 1) { window.location.replace(l[0]); }
})();
