const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

console.log(hasTooltip)
for (let i = 0; i < hasTooltip.length; i++) {
    
    let position = hasTooltip[i].getBoundingClientRect();
    let tooltip = `<div class="tooltip" style="left:${position.x}px">${hasTooltip[i].title}</div>`;

    hasTooltip[i].insertAdjacentHTML('afterEnd', tooltip);

    hasTooltip[i].addEventListener("click", (event) => {
        event.preventDefault();

    //     hasTooltip.forEach(element => {
    //         element.nextElementSibling.classList.remove('tooltip_active');
    // }); 
    
    //если удалять класс актив каждый раз во время клика работает только одна подсказка, но не работает отключение при повторном нажатии, только при переключении, не могу сообразить каким образом выстроить логику при работе с классами. Есть вторая идея она построенна на работе с элементами , но удалять целый элемент со страницы ради скрытия подсказки, считаю слишком затратной... в общем застопорился я на этой задачи, нужна подсказка 

    
        event.target.nextElementSibling.classList.toggle('tooltip_active')
    });
}