const btnMenu = document.querySelector('.header__btn-menu');
const nav = document.querySelector('.header__nav');
const overlay = document.getElementById( 'overlay');
const navLinks = document.querySelectorAll ('.header__nav ul li a');
const menuClose = document.getElementById('btn-menu-close');

btnMenu.addEventListener('click', () => {
    nav.classList.toggle('header__nav--active');
    overlay.classList.toggle('overlay--active')
    
    document.body.classList.toggle('no-scroll');

    if ( nav.classList.contains('header__nav--active') ){
        menuClose.src = 'images/icon-close.svg';
    } else{
        menuClose.src = 'images/icon-hamburger.svg';
    }
   
    
} );





overlay.addEventListener('click', () => {
    nav.classList.remove('header__nav--active');
    overlay.classList.remove('overlay--active');
    document.body.classList.remove('no-scroll');
});



 navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('header__nav--active');
        overlay.classList.remove('overlay--active');
        document.body.classList.remove('no-scroll');
        menuClose.src = 'images/icon-hamburger.svg';
        });
    } );   
