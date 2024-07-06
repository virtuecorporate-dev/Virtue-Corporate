window.addEventListener("scroll",()=>{
    document.querySelector("#navbar").classList.toggle("sticky-nav",scrollY > 0)
    document.querySelector(".logo img").classList.toggle("sticky-logo", scrollY > 0)
    
    if (scrollY > 0) {
        document.querySelector(".home-logo img").src = "./images/logo-2.png";
        
    } else {
        document.querySelector(".home-logo img").src = "./images/logo.png";
    
    }
})

window.addEventListener('DOMContentLoaded', function() {
    var homelogo = document.querySelector('.home-logo img');

    function changelogo() {
        if (window.innerWidth > 990) {
            homelogo.src = './images/logo-2.png';
        } 
        else {
            homelogo.src = './images/Logo.png';
        }
    }

    
    
    changelogo();
});


const menu = document.querySelector('.hamburger-menu i');
const sidenav = document.querySelector('.sidenav-container');
const closeMenu = document.querySelector('.close-menu i');

menu.addEventListener('click', () => {
    sidenav.classList.toggle('show-sidenav');
});

closeMenu.addEventListener('click', () => {
    sidenav.classList.remove('show-sidenav');
});


$(document).ready(function(){
    $("#client-logo-slider").owlCarousel({
        items: 5,
        dots: false,
        nav: true,
        loop: true,
        autoplay:true,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            600: {
                items: 2,
                margin: 10
            },
            800: {
                items: 3,
                margin: 10
            },
            1100: {
                items: 5,
                margin: 10
            }
        }
    });
});
