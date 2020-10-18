const menuBars = document.getElementById('mobile-menu-bars');
const mobileMenu = document.getElementById('mobile-menu');
const closeMobileMenuIcon = document.getElementById('close-mobile-menu');


const clickRemoveMenu = () => {
    mobileMenu.style.display = 'none';
    closeMobileMenuIcon.removeEventListener('click', clickRemoveMenu);
}

const eventListeners = () => {
    menuBars.addEventListener('click', () => {
        mobileMenu.style.display = 'flex';
        closeMobileMenuIcon.addEventListener('click', clickRemoveMenu);
    });
}

eventListeners();