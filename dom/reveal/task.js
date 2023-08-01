'use strict';

const reveal = Array.from(document.querySelectorAll('.reveal'));

function isVisible(el) {
    const { top, bottom } = el.getBoundingClientRect();
    if (bottom < 0 || top > window.innerHeight) {
        el.classList.remove('reveal_active');
    } else {
        el.classList.add('reveal_active');
    }
}

for(let i = 0; i < reveal.length; i++) {
    window.addEventListener('scroll', function() { 
        isVisible(reveal[i]);
    })
}