// ==UserScript==
// @name         SoundSnap v5
// @namespace    http://tampermonkey.net/
// @version      5.0
// @description  try to take over the world!
// @author       Tjalle
// @match        https://www.soundsnap.com/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';
    // wavesurfer[node-*****]["mediaContainer"]["children"][2]
    // wavesurfer[201211]["mediaContainer"]["children"][2].getAttribute('src')
    // var elements = document.getElementsByClassName("ojoo-teaser");




    $(document).ready(function () { //When document has loaded

        setTimeout(function () {

            var elements = document.getElementsByClassName("ojoo-teaser");

            elements.forEach(element => {
                var id = element.getAttribute('id').split('-');
                id = id[id.length - 1];

                var originalHTML = element.children[0].children[0].children[0].children[1].innerHTML;
                var link = wavesurfer[id].backend.song;

                var newHTML = '<a href="' + link + '">' + originalHTML + '</a>';

                element.children[0].children[0].children[0].children[1].innerHTML = newHTML;



            });

        }, 3500); //Two 3.5 seconds that will be waited before executeion

    });




})();