'use strict'
// #0  для первого задания нужно изменить формат записи таймера

// const addText = function () {
//     const initialTimer = document.getElementById("timer");
//     initialTimer.textContent -= 1;
//     if (initialTimer.textContent <= 0) {
//         alert('Вы победили в конкурсе');
//         clearInterval(inervalID);
//     }
// }
// const inervalID = setInterval(addText, 1000);


// #1-2
const initialTimer = document.getElementById("timer");
const getTime = new Date('1970-01-01T' + initialTimer.textContent);
const getSeconds = getTime.getHours() * 3600 + getTime.getMinutes() * 60 + getTime.getSeconds();
const setTimeAlarm = Date.now() + getSeconds * 1000;

let timer = setInterval(function (){
    let timeRest = setTimeAlarm - Date.now();

    if (timeRest <= 0) {
        clearInterval(timer);
        alert('Вы победили в конкурсе! Нажмите ОК для загрузки файла!');
//  загрузка файла 
        let url = document.createElement('a');
        url.href = 'file';
        url.click();
    } else {
        initialTimer.textContent = new Date(1970, 0, 0, 0, 0,  timeRest / 1000).toLocaleTimeString();
    }
}, 1000);


