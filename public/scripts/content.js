// Отображение - скрытой части поста
function handlerContent() {
    var hiddenContent = document.querySelector('.hiddenContent');
    var menuClass = hiddenContent.getAttribute('class');

    switch(menuClass) {
        case 'hiddenContent hidden':
        hiddenContent.setAttribute('class', 'hiddenContent visible');
        break;

        case 'hiddenContent visible':
        hiddenContent.setAttribute('class', 'hiddenContent hidden');
        break;
    }
}

// Обновить событие
setInterval(
    `var hiddenContent = document.querySelector('.contentItem');
    hiddenContent.setAttribute('onclick', 'handlerContent();');`
,500
);