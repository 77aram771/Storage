import 'babel-polyfill';
import './../sass/styles.scss';

// Menu Event

const Menu = document.querySelector('.header_nav_burger_menu');
const Menu_button = document.querySelector('.header_nav_burger');
const Menu_button_close = document.querySelector('.header_nav_burger_close');
let bool = false;



Menu_button_close.addEventListener('click', () => {

    if (bool) {

        console.log(bool)
    }
    else {
        Menu.style.cssText = 'right: -500px';
        bool = true;
        console.log(bool)
    }
    bool = true;
});

Menu_button.addEventListener('click', () => {

    if (bool) {
        Menu.style.cssText = 'right: -500px';
        console.log(bool)
    }
    else {
        Menu.style.cssText = 'right: 0';
        console.log(bool)
    }
    bool = false;
});




