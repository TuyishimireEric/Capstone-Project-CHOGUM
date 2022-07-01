// eslint-disable-next-line no-unused-vars
function showMenu() {
  document.querySelector('.navigation').classList.toggle('active');
  document.querySelector('.menu-overlay').classList.toggle('active');
  document.querySelector('.menu').classList.toggle('active');
}

// eslint-disable-next-line no-unused-vars
function hideMenu() {
  document.querySelector('.navigation.active').classList.remove('active');
  document.querySelector('.menu-overlay.active').classList.remove('active');
  document.querySelector('.menu.active').classList.remove('active');
}
