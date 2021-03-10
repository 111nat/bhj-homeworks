for (let i = 0; i < document.getElementsByClassName('menu__link').length; i++) {
    document.getElementsByClassName('menu__link').item(i).onclick = () => {

        

        if (document.getElementsByClassName('menu__item').item(i).querySelector('ul').className.includes(' menu_active')) {
            document.getElementsByClassName('menu__item').item(i).querySelector('ul').className = document.getElementsByClassName('menu__item').item(i).querySelector('ul').className.replace(' menu_active', '');
            return false;
        }
        else {
            for (let j = 0; j < document.querySelectorAll('ul.menu_active').length; j++) {
                document.querySelectorAll('ul.menu_active').item(j).className = document.querySelectorAll('ul.menu_active').item(j).className.replace(' menu_active', '');
            }


            document.getElementsByClassName('menu__item').item(i).querySelector('ul').className += ' menu_active';
            return false;
        }
    };
}