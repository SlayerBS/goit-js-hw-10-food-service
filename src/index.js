import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const menuContainerRef = document.querySelector('.js-menu');
const themeSwitchContainerRef = document.querySelector('#theme-switch-toggle');
themeSwitchContainerRef.addEventListener('change', onSwitchThemeChanged);

//Проверка темы при первоначальной загрузке страницы.
//Если сТраница раньше на загружалась, то theme: null
if (localStorage.getItem('theme') === Theme.DARK) {
  bodyRef.classList.add(Theme.DARK);
  themeSwitchContainerRef.checked = 'true';
} else {
  localStorage.setItem('theme', Theme.LIGHT);
  bodyRef.classList.add(Theme.LIGHT);
}

//импорт данных
import menuJs from './menu.json';
import menuTemplate from './templates/menu.hbs';

//создание и публикация разметки
const markup = createMarkup(menuJs);
menuContainerRef.insertAdjacentHTML('afterbegin', markup);

function onSwitchThemeChanged() {
  if (localStorage.theme === Theme.LIGHT) {
    bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function createMarkup(menuJs) {
  return menuJs.map(menuTemplate).join('');
}
