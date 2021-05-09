import './styles.css';
const bodyRef = document.querySelector('body');
const themeSwitchContainerRef = document.querySelector('#theme-switch-toggle');

if (localStorage.getItem('theme') === 'light') {
  bodyRef.classList.add('light-theme');
} else {
  themeSwitchContainerRef.checked = 'true';
  bodyRef.classList.add('dark-theme');
}

// localStorage.setItem('theme', 'light');
bodyRef.classList.add('light-theme');

console.log(themeSwitchContainerRef);

themeSwitchContainerRef.addEventListener('change', onSwitchThemeChanged);

function onSwitchThemeChanged(evt) {
  console.log('Changed', themeSwitchContainerRef.checked);
  if (localStorage.theme === 'light') {
    console.log(localStorage.getItem('theme'));
    bodyRef.classList.replace('light-theme', 'dark-theme');
    localStorage.setItem('theme', 'dark');
    console.log(localStorage.getItem('theme'));
  } else {
    bodyRef.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('theme', 'light');
  }
}
