import './styles.css';
const bodyRef = document.querySelector('body');
const menuContainerRef = document.querySelector('.js-menu');
const themeSwitchContainerRef = document.querySelector('#theme-switch-toggle');

//Проверка темы при загрузке страницы
if (localStorage.getItem('theme') === 'light') {
  bodyRef.classList.add('light-theme');
} else {
  themeSwitchContainerRef.checked = 'true';
  bodyRef.classList.add('dark-theme');
}

bodyRef.classList.add('light-theme');

console.log(themeSwitchContainerRef);

themeSwitchContainerRef.addEventListener('change', onSwitchThemeChanged);

function onSwitchThemeChanged() {
  console.log('Changed', themeSwitchContainerRef.checked);
  if (localStorage.theme === 'light') {
    bodyRef.classList.replace('light-theme', 'dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    bodyRef.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('theme', 'light');
  }
}

import menuJs from './menu.json';

import menuTemplate from './templates/menu.hbs';

let markup = '';

menuJs.forEach(item => (markup += menuTemplate(item)));

menuContainerRef.insertAdjacentHTML('afterbegin', markup);
