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

    let elements = document.getElementsByClassName("audio-description");
    const lengthList = elements.length 
    let links = [];

    for (let i = 0; i < lengthList; i++) {
        links.push(`https://www.soundsnap.com${wavesurfer[i].backend.song}`);
    }
    
    for (let i = 0; i < lengthList; i++) {
        let tempHtml = elements[i].innerHTML;
        elements[i].innerHTML = `<a href=\"${links[i]}\">${tempHtml}</a>`;
    }
})();