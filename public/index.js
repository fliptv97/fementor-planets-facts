'use strict';

const menuBtnEl = document.getElementById('menu-btn');
const navEl = document.querySelector('.nav');

menuBtnEl.addEventListener('click', () => {
    menuBtnEl.classList.toggle('menu-btn--active');
    navEl.classList.toggle('nav--visible');
});
