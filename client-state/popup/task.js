const popup = document.getElementById('subscribe-modal');
const close = document.querySelector('.modal__close');

close.onclick = () => {
    popup.classList.remove('modal_active');
    document.cookie = 'modal=true';
}

function checkCookie() {
    if (document.cookie.indexOf('modal=true') < 0) {
        popup.classList.add('modal_active');
    }
}

document.addEventListener('load', checkCookie);