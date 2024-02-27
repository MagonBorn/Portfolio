// -------DOM Variables-------
const loader = document.querySelector('svg');
const body = document.querySelector('body');
const skipText = document.getElementById('skipText');
const skipButton = document.getElementById('skipButton');

// -------Event Listeners-------
loader.addEventListener('animationend', () => {
  loader.style.transition = 'opacity, 2s';
  loader.style.opacity = '0%';
  loader.style.zIndex = '0';
  skipText.style.transition = 'opacity 1s';
  skipText.style.opacity = '0%';
  skipButton.style.transition = 'opacity 1s';
  skipButton.style.opacity = '0%';
  setTimeout(function () {
    loader.addEventListener('transitionend', function () {
      loader.style.display = 'none';
    })
  }, 2000)
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
  skipText.style.transition = 'fontSize 0s, opacity 1s;';
  skipText.style.opacity = '0%';
  skipText.style.fontSize = '28';
  loader.style.transition = 'opacity 2.6s 1s, zIndex 2.6s 1s';
  loader.style.opacity = '0%';
  loader.style.zIndex = '5';
  skipButton.style.transition = 'r .9s ease-in-out';
  skipButton.style.r = '1250';
  skipButton.style.fill = 'url(#grad1)';
  skipButton.style.filter = 'drop-shadow(0 0 200px #083829)';
  setTimeout(function () {
    loader.addEventListener('transitionend', function () {
      loader.style.display = 'none';
    })
  }, 2000)
})

skipButton.addEventListener('mouseup', () => {
  skipText.style.transition = 'fontSize, 1s';
  skipText.style.fontSize = '32';
})