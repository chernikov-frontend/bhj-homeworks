'use strict';
let getHole = index => document.getElementById(`hole${index}`);
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
let hit = parseInt(dead.textContent);
let miss = parseInt(lost.textContent);

function checkGame(dead, lost) {
    if (dead === 10) {
        alert('Вы победили!');
        location.reload();
    } else if (lost === 5) {
        alert('Вы проиграли!');
        location.reload();
    };
};

for (let index = 1; index < 9; index++) {
    getHole(index).onclick = function() {
        if (this.className.includes('hole_has-mole')) {
            hit += 1;
            dead.textContent = hit;
        } else {
            miss += 1;
            lost.textContent = miss;
        };
        checkGame(hit, miss);
    };
};