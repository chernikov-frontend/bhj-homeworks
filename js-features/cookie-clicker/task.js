'use strict'

const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
const cookieSpeedClick = document.getElementById("clicker__speed__counter");
let nowTime = Date.now();
let previousClicks = 0;


cookie.onclick = function() {
    let clicks = clickerCounter.textContent++;

    if (clicks % 2 == 0) {
        cookie.width = 150;
    } else {
        cookie.width = 200;
    }

    cookieSpeedClick.textContent = (((Date.now() - nowTime) / 1000) / (clicks - previousClicks)).toFixed(2);
    previousClicks = clicks;

}