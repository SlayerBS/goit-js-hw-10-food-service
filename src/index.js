import './styles.css';
const bodyRef = document.querySelector('body');
const menuContainerRef = document.querySelector('.js-menu');
const themeSwitchContainerRef = document.querySelector('#theme-switch-toggle');
themeSwitchContainerRef.addEventListener('change', onSwitchThemeChanged);

//Проверка темы при первоначальной загрузке страницы.
//Если сТраница раньше на загружалась, то theme: null
if (localStorage.getItem('theme') === 'dark-theme') {
  bodyRef.classList.add('dark-theme');
  themeSwitchContainerRef.checked = 'true';
} else {
  localStorage.setItem('theme', 'light-theme');
  bodyRef.classList.add('light-theme');
}

//импорт данных
import menuJs from './menu.json';
import menuTemplate from './templates/menu.hbs';

//создание и публикация разметки
const markup = createMarkup(menuJs);
menuContainerRef.insertAdjacentHTML('afterbegin', markup);

function onSwitchThemeChanged() {
  //функция изменения фона при событии на инпуте
  if (localStorage.theme === 'light-theme') {
    bodyRef.classList.replace('light-theme', 'dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else {
    bodyRef.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('theme', 'light-theme');
  }
}

function createMarkup(menuJs) {
  return menuJs.map(menuTemplate).join('');
}
