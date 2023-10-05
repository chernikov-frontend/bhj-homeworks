const user = document.getElementById('welcome');
const userID = document.getElementById('user_id');
const signin = document.querySelector('.signin');
// const visForm = () => {
//     signin.classList.add('signin_active');
// };

let storageData = localStorage.getItem('id_user');

function checkLocalStorage () {
    if(storageData !== null) {
        user.classList.add('welcome_active');
        signin.classList.remove('signin_active');
        userID.innerText = localStorage.getItem('id_user');
    }
}

document.onload = checkLocalStorage();

const form = document.getElementById('signin__form');
form.addEventListener('submit',  (e) => {
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';
    xhr.send(formData);
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4) {
            let request = xhr.response;

            if (request['success'] != true) {
                alert('Вы ввели неправильный логин/пароль')
            } else {
                localStorage.setItem('id_user', request['user_id']);
                signin.classList.remove('signin_active');
                user.classList.add('welcome_active');
                userID.innerText = request['user_id'];
                console.log(userID.innerText)

                signin.reset();
            }
        }
    };
    e.preventDefault();
});

let saveUserId = localStorage.getItem('id_user');
console.log(saveUserId);