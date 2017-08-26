(() => {
  const appDrawerButton = document.querySelector('.app_drawer__button');
  const appDrawer = document.querySelector('.app_drawer');
  appDrawerButton.addEventListener('click', () =>
    toggleMenu(appDrawer, appDrawerButton)
  );
})();

function toggleMenu(drawer, button) {
  button.classList.toggle('app_drawer__button--visible');
  drawer.classList.toggle('app_drawer--visible');
}
