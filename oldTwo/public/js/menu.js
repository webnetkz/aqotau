// Отображение - скрытие меню
function handlerMenu() {
    var menu = document.querySelector('#hiddenMenu');
    var menuClass = menu.getAttribute('class');
    
    switch(menuClass) {
        case 'hidden':
        menu.setAttribute('class', 'visible');
        break;

        case 'visible':
        menu.setAttribute('class', 'hidden');
        break;
    }
}




// Обновить событие
setInterval(
    `var menu = document.querySelector('nav');
    menu.setAttribute('onclick', 'handlerMenu();');`
,500
);

