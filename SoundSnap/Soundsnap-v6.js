// ==UserScript==
// @name         SoundSnap v6
// @namespace    http://tampermonkey.net/
// @version      6.0
// @description  try to take over the world!
// @author       Tjalle
// @match        https://www.soundsnap.com/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    $(document).ready(function () { // When document has loaded
        setTimeout(function () {

            let waveElements = document.getElementsByClassName("wave");

            for (const waveEl of waveElements) {
                // replace everything that isn't a number (c.q. extract the id)
                let id = waveEl.getAttribute('id').replace(/[^0-9.]+/, '');
                id = parseInt(id)

                let url = wavesurfer[id].backend.song;

                let audioDescription = document.getElementById(`node-${id}`).getElementsByClassName("audio-description")[0]
                let innerHTML = audioDescription.innerHTML

                audioDescription.innerHTML = `<a href="${url}">${innerHTML}</a>`
            }



        }, 3500); //Two 3.5 seconds that will be waited before executeion

    });
})();