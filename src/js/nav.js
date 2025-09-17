// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerContainer = document.querySelector('.hamburger-container');
  const menu = document.getElementById('menu');

  // toggle menu
  hamburgerContainer.addEventListener('click', () => {
    const isOpen = menu.style.display === 'block';
    menu.style.display = isOpen ? 'none' : 'block';
    menu.classList.toggle('menu-list', !isOpen);
  });

  // reset menu inline style on desktop resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      menu.removeAttribute('style');
    }
  });

  // icon animation
  const [topBar, middleBar, bottomBar] = document.querySelectorAll('.hamburger li');

  hamburgerContainer.addEventListener('click', () => {
    const isActive = middleBar.classList.contains('rot-315deg');
    topBar.classList.toggle('rot42deg', !isActive);
    middleBar.classList.toggle('rot-315deg', !isActive);
    bottomBar.classList.toggle('hidden', !isActive);
  });
});
