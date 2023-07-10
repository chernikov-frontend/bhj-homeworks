"use strict"

const tab = document.querySelectorAll('div.tab');
const tabContent = document.querySelectorAll('div.tab__content');


for (let i = 0; tab.length > i >= 0; ++i) {
    tab[i].addEventListener('click', function() {
        // Удаляем активные классы по клику
        document.querySelector('div.tab_active').classList.remove('tab_active');
        document.querySelector('div.tab__content_active').classList.remove('tab__content_active')
        // Добавляем активные классы по клику на конкретную вкладку
        tabContent[i].classList.add('tab__content_active');
        tab[i].classList.add('tab_active');
    });
};