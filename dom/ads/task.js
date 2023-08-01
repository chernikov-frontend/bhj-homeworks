'use strict';

const rotatorCase = document.querySelectorAll('.rotator__case');
let rotatorIndex = 0;


function rotator () {
	for (let i = 0; i < rotatorCase.length; i++) {
		rotatorCase[i].classList.remove('rotator__case_active');
	}

    rotatorCase[rotatorIndex].classList.add('rotator__case_active');

    if(rotatorIndex + 1 == rotatorCase.length) {
        rotatorIndex = 0;
    } else {
        rotatorIndex++;
    }	
}

setInterval(rotator, 1000);