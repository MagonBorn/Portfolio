// // -------DOM Variables-------
const loadingContainer = document.querySelector('svg');
const body = document.querySelector('body');
const skipText = document.getElementById('skipText');
const skipButton = document.getElementById('skipButton');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const mainContent = document.querySelector('main');
const aboutMe = document.getElementById('aboutMe');

// -------On Skip Button clicked-------
skipButton.addEventListener('mousedown', () => {
  skipButton.style.transition = 'r 1s ease-in-out';
  skipButton.style.r = '1250';
  skipButton.style.fill = 'url(#grad1)';
  skipButton.style.filter = 'drop-shadow(0 0 200px #083829)';

  skipText.style.transition = 'fontSize, 3s';
  skipText.style.fontSize = '400';
  skipText.innerHTML = 'Welcome';

  // body.style.transition = 'backgroundColor, 6s';
  body.style.backgroundColor = 'white';

  loadingContainer.classList.add('visibilityHidden');

  loadingContainer.addEventListener('transitionend', (e) => {
    if (e.propertyName === 'opacity') {
      loadingContainer.classList.add('hidden');
      header.classList.remove('hidden');
      mainContent.classList.remove('hidden');
      footer.classList.remove('hidden');
      setTimeout(() => {
        header.classList.remove('visibilityHidden');
        mainContent.classList.remove('visibilityHidden');
        footer.classList.remove('visibilityHidden');
      }, 20);
    }
  })
});

// -------On Animation End-------
loadingContainer.addEventListener('animationend', () => {
  skipText.style.transition = 'opacity 1s';
  skipText.style.opacity = '0%';
  skipButton.style.transition = 'opacity 1s';
  skipButton.style.opacity = '0%';

  loadingContainer.classList.add('visibilityHidden');

  loadingContainer.addEventListener('transitionend', (e) => {
    if (e.propertyName === 'opacity') {
      // body.style.transition = 'backgroundColor, 8s';
      // body.style.backgroundColor = 'white';
      loadingContainer.classList.add('hidden');
      header.classList.remove('hidden');
      mainContent.classList.remove('hidden');
      footer.classList.remove('hidden');
      setTimeout(() => {
        header.classList.remove('visibilityHidden');
        mainContent.classList.remove('visibilityHidden');
        footer.classList.remove('visibilityHidden');
      }, 20);
    }
  })
});