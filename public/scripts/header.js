// Отображение - скрытие меню
function handlerMenu() {
    var menu = document.querySelector('#signup');
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

// Отображение - добавления поста
function handlerPost() {
    var append = document.querySelector('#append');
    var menuClass = append.getAttribute('class');
    
    switch(menuClass) {
        case 'hidden':
        append.setAttribute('class', 'visible');
        break;

        case 'visible':
        append.setAttribute('class', 'hidden');
        break;
    }
}



// Обновить событие
setInterval(
    `var menu = document.querySelector('#headerElementTwo');
    menu.setAttribute('onclick', 'handlerMenu();');
    var append = document.querySelector('#headerElementOne');
    append.setAttribute('onclick', 'handlerPost();');`
,500
);

