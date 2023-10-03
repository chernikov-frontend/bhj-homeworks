let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.addEventListener('readystatechange', event => {
    if(xhr.readyState === xhr.DONE && xhr.status === 200) {        
        let data = JSON.parse(xhr.responseText);
        
        let answers = Array.from(data.data.answers);
        let question = document.getElementById('poll__title');
        question.insertAdjacentText('afterbegin', data.data.title);
        let answersSet = document.getElementById('poll__answers');
        for(let i = 0; i < answers.length; i++) {
            answersSet.insertAdjacentHTML('beforebegin', 
                `<button class="poll__answer">
                    ${answers[i]}
                </button>` 
            )
        }
        
        let buttons = Array.from(document.querySelectorAll('.poll__answer'));       
        for(let button of buttons) {
            button.addEventListener('click', event => {
                alert('Спасибо, ваш голос засчитан!');
                event.preventDefault();
            })
        }
    };
});
