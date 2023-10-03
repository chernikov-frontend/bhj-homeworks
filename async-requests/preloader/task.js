const loader = document.getElementById('loader');
const valuteContainer = document.getElementById('items');

const xhr = new XMLHttpRequest();
xhr.open('GET', "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.send();
console.log(xhr);

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let data = JSON.parse(xhr.response).response.Valute;
        loader.classList.remove("loader_active");

        for (let key in data) {
            items.innerHTML += 
            `<div class="item">
                <div class="item__code">
                    ${data[key].CharCode}
                </div>         
                <div class="item__value">
                    ${data[key].Value}
                </div>         
                <div class="item__currency">
                    руб.
                </div>
            </div>`
        }
    } else {
        loader.classList.add("loader_active");
    }
});

