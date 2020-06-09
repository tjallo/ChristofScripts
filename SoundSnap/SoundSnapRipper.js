// ==UserScript==
// @name         SoundSnapRipper
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Personal feud with SoundSnap
// @author       Tjallo
// @match        *.soundsnap.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    let elements = document.getElementsByClassName("audio-description");
    let links = [];

    for (let i = 0; i < 20; i++) {
        links.push(`https://www.soundsnap.com${wavesurfer[i].backend.song}`);
    }

    for (let i = 0; i < 20; i++) {
        let tempHtml = elements[i].innerHTML;
        elements[i].innerHTML = `<a href=\"${links[i]}\">${tempHtml}</a>`;
    }
   

})();