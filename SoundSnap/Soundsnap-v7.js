// ==UserScript==
// @name         SoundSnap v7
// @namespace    http://tampermonkey.net/
// @version      7.0
// @description  try to take over the world!
// @author       Tjalle
// @match        https://www.soundsnap.com/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
  "use strict";

  $(document).ready(function () {
    // When document has loaded
    setTimeout(function () {
      let waveIds = [];
      document.getElementsByClassName("wave-container").forEach((el) => {
        waveIds.push(el.children[0].id);
      });

      waveIds = waveIds.map((el) => el.replace("wave", ""));

      waveIds.forEach((id) => {
        const container = document.getElementById(`node-${id}`).children[0]
          .children[0];
        const audioDescEl = container.children[2];

        const textContent = audioDescEl.textContent;
        const url = wavesurfer[id].backend.song;

        const link = document.createElement("a");
        link.href = url;
        link.textContent = textContent;

        container.replaceChild(link, audioDescEl);
      });
    }, 3500); 
  });
})();
