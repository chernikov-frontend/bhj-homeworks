'use strict';

const link = Array.from(document.querySelectorAll('.dropdown__link')); 
const list = document.querySelector('.dropdown__list'); 
const value = document.querySelector('.dropdown__value');

value.addEventListener('click', () => {
    console.log('click')
    list.classList.add('dropdown__list_active');
    console.log(list.classList)
});

link.forEach(element => {
    element.onclick = () => {
        value.textContent = element.textContent;
        list.classList.remove('dropdown__list_active');
        return false;
    }
});
