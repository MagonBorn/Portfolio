const body = document.querySelector('body');
const header = document.querySelector('header');

window.addEventListener('orientationchange', function () {
  body.style.transition = 'none';
  header.style.transition = 'none';
})

window.addEventListener('resize', function () {
  body.style.transition = 'none';
  header.style.transition = 'none';
})