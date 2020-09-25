// ==UserScript==
// @name         Soundsnap v3
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  try to take over the world!
// @author       Tjalle
// @match        https://soundsnap.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    var songURLs = [];

    for (var i = 0; i < wavesurfer.length; i++) {
        var url = wavesurfer[i].backend.song;
        songURLs.push(url);
    }


    var descriptionArray = document.getElementsByClassName('audio-description');

    for (var i = 0; i < descriptionArray.length; i++) {
        var originalHtml = descriptionArray[i].innerHTML;
        var songURL = songURLs[i];
        document.getElementsByClassName('audio-description')[i].innerHTML = `<a href=\"${songURL}\">${originalHtml}</a>`;
    }

})();