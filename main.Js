const menu=document.querySelector('#mobile-menu');
const menuLinks=document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo')
let scrollPos = window.scrollY;

// display Mobile Menue 
const mobileMenu =() => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};
menu.addEventListener('click', mobileMenu);

// show active menu when scrolling
const heightlightManu = () =>{
    const elem = document.querySelector('.highlight')
    const homeMenu =document.querySelector('#home-page')
    const aboutManu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#servises-page')
    let scrollPos = window.scrollY

    // add 'heightlight' class to my meny items
    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight')
        aboutManu.classList.remove('highlight')
        return
    }else if (window.innerWidth > 960 && scrollPos < 1400){
        aboutManu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    }else if (window.innerWidth > 960 && scrollPos < 2345){
        servicesMenu.classList.add('highlight')
        aboutManu.classList.remove('highlight')
        return
    }
    if(elem && window.innerWidth < 960 && scrollPos < 600 || elem){
        elem.classList.remove('hightlight')
    }
}

window.addEventListener('scroll',heightlightManu);
window.addEventListener('click', heightlightManu);


// CLOSE MOBILE mENU WHEN CLICKING ON A MENU ITEM
const hideMobileMenu = () =>{
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
};

menuLinks.addEventListener('click',hideMobileMenu);
navLogo.addEventListener('click',hideMobileMenu);