// -------Open Mobile Nav Menu-------
function openMenu(x) {
  let mobileMenu = document.getElementById('mobileMenu');
  x.classList.toggle('change');
  if (mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'block';
  }
}