'use strict';

const fontSizes = document.querySelectorAll('.font-size');

function changeFontSize(event) {
    event.preventDefault(); 
    fontSizes.forEach((elem) => elem.classList.remove('font-size_active'));
    event.target.classList.add('font-size_active');

    const size = event.target.getAttribute('data-size');

    const book = document.querySelector('.book');

    book.classList.remove('book_fs-small', 'book_fs-big');

    if (size === 'small') {
    book.classList.add('book_fs-small');
    } else if (size === 'big') {
    book.classList.add('book_fs-big');
    }
}

fontSizes.forEach((elem) => elem.addEventListener('click', changeFontSize));