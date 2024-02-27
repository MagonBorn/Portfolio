// -------DOM Variables-------
const loader = document.querySelector('svg');
const body = document.querySelector('body');
const skipText = document.getElementById('skipText');
const skipButton = document.getElementById('skipButton');

// -------Event Listeners-------
loader.addEventListener('animationend', () => {
  loader.style.opacity = '0%';
  loader.style.transition = 'opacity, 2s';
  body.style.backgroundColor = '#001F00';
  body.style.transition = 'backgroundColor, 2s';
  skipText.style.opacity = '0%';
  skipText.style.transition = 'opacity 1s';
  skipButton.style.opacity = '0%';
  skipButton.style.transition = 'opacity 1s';
})

skipButton.addEventListener('mouseenter', () => {
  skipText.style.transition = 'fontSize, 1s';
  skipText.style.fontSize = '32';
})

skipButton.addEventListener('mouseleave', () => {
  skipText.style.transition = 'fontSize, 0s';
  skipText.style.fontSize = '28';
})

skipButton.addEventListener('mousedown', () => {
  skipText.style.transition = 'fontSize, 0s';
  skipText.style.fontSize = '28';
  loader.style.transition = 'opacity 1s';
  loader.style.opacity = '0%';
  body.style.backgroundColor = '#001F00';
})

skipButton.addEventListener('mouseup', () => {
  skipText.style.transition = 'fontSize, 1s';
  skipText.style.fontSize = '32';
})