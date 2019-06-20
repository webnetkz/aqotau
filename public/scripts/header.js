
// Отображение - скрытие меню
function handlerMenu() {
    var menu = document.querySelector('#signup');
    var menuClass = menu.getAttribute('class');
    
    switch(menuClass) {
        case 'hiddenMenu':
        menu.setAttribute('class', 'visibleMenu');
        break;

        case 'visibleMenu':
        menu.setAttribute('class', 'hiddenMenu');
        break;
    }
}
// Обновить событие
setInterval(
    `var menu = document.querySelector('#headerElementTwo');
    menu.setAttribute('onclick', 'handlerMenu();');`
,500
);