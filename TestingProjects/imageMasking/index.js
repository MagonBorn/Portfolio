const loader = document.querySelector('svg');
const body = document.querySelector('body');

loader.addEventListener('animationend', () => {
  loader.style.opacity = '0%';
  loader.style.transition = 'opacity, 6s';
  body.style.backgroundColor = '#001F00';
  body.style.transition = 'backgroundColor, 2s';
})
