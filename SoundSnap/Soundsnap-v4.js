// ==UserScript==
// @name         Soundsnap v4
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  try to take over the world!
// @author       Tjalle
// @match        https://www.soundsnap.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';


    var songs = [];

    for (var i = 0; i < wavesurfer.length; i++) {
        if (wavesurfer[i] != undefined) {
            songs.push(wavesurfer[i].backend.song);
        }
    }

    var sortedSongs = [];

    for (var j = songs.length -1; j >= 0; j--) {
        sortedSongs.push(songs[j]);
    }


    var descriptionArray = document.getElementsByClassName('audio-description');

    for (var k = 0; k < descriptionArray.length; k++) {
        var originalHtml = descriptionArray[k].innerHTML;
        var songURL = sortedSongs[k];
        document.getElementsByClassName('audio-description')[k].innerHTML = `<a href=\"${songURL}\">${originalHtml}</a>`;
    }
})();