const hamburgerMenuOpen = document.querySelector('#hamburger_menu-open');
const hamburgerMenuClose = document.querySelector('#hamburger_menu-close');
const hamburgerMenuContainer = document.querySelector('.hamburger_menu-container');

hamburgerMenuOpen.addEventListener('click', () => {
    document.querySelector('.hamburger_menu-container').classList.remove('display_none');
});

hamburgerMenuClose.addEventListener('click', () => {
    document.querySelector('.hamburger_menu-container').classList.add('display_none');
});

hamburgerMenuContainer.addEventListener('click', (event) => {
    if (event.target === hamburgerMenuContainer) {
        hamburgerMenuContainer.classList.add('display_none');
    }
});