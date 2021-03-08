const mobileMenu = document.querySelector('#top-bar > nav');
const mobileMenuButton = document.querySelector('.mobile-menu-button');

{
    const mobileMenuItems = document.querySelectorAll('#top-bar li');
    const blurLayer = document.querySelector('.blur-layer');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('menu--active');
        blurLayer.classList.toggle('blur-layer--active');
    });

    mobileMenuItems.forEach(item => item.addEventListener('click', () => {
        mobileMenu.classList.toggle('menu--active');
        blurLayer.classList.toggle('blur-layer--active');
    }));
}

{
    const hamburgerBars = document.querySelectorAll('.hamburger-bar');

    mobileMenuButton.addEventListener('click', () => {
        hamburgerBars.forEach(bar => bar.classList.toggle('hamburger-bar--active'));
    });
}