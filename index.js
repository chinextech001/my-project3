const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar__menu');
const navlogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');

//display olgo menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menulinks.classList.toggle('active');
  body.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".animate-hero",
   { opacity: 0,
   y: -150, 
   duration: 10.6, 
   slagger: 0.3 });
