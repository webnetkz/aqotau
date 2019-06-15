<!DOCTYPE html>
<html lang="ru">
    <head>
        <title>Все в прокат</title>

        <meta charset="UTF-8">
        <meta name="theme-color" content="rgb(255, 255, 255)">
        <meta name="author" content="TOO WebNet">
        <meta name="description" content="Vse V Prokat">
        <meta name="keywords" content="RedactorPhoto">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="robots" content="index, follow">

        <link rel="shortcut icon" href="/public/images/miniLogo.png" type="image/png">
        <link rel="stylesheet" href="/public/styles/style.css">
        <link rel="stylesheet" href="/public/styles/mobileStyle.css">
        <link rel="manifest" href="/manifest.json">
        
    </head>

    <body>
        
        <header>
            <div class="headerElement">
                <img src="public/images/logo" alt="logotype Vse v prokat">
            </div>
            <div class="headerElement">
                <p>
                    <img src="public/images/plus.svg" class="icons" alt="append post">
                    Добавить
                </p>
            </div>
            <div class="headerElement">
                <img src="public/images/search.svg" alt="search input">
            </div>
        </header>

        <div id="search">
        
        </div>

        <nav>
            <div class="categoriesElement"></div>
            <div class="categoriesElement"></div>
            <div class="categoriesElement"></div>
            <div class="categoriesElement"></div>
            <div class="categoriesElement"></div>
            <div class="categoriesElement"></div>
            <div class="categoriesElement"></div>
            <div class="categoriesElement"></div>
        </nav>

        <script>
             // Проверка на поддержку service worker
            if('serviceWorker' in navigator) {
                navigator.serviceWorker
                    .register('/sw.js')
                    .then(function() { console.log("Service Worker Registered"); });
            }
        </script>
        <script src="/public/scripts/main.js"></script>
    </body>
</html>