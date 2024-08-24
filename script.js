window.addEventListener("scroll",()=>{
    document.querySelector("#navbar").classList.toggle("sticky-nav",scrollY > 0)
    document.querySelector(".logo img").classList.toggle("sticky-logo", scrollY > 0)
    document.querySelector(".home-logo img").classList.toggle("sticky-logo", scrollY > 0)
})

window.addEventListener('DOMContentLoaded', function() {
    var homelogo = document.querySelector('.logo img');

    function changelogo() {
        if (window.scrollY > 10) {
            homelogo.src = './images/logo-2.webp';
        } 
        else {
            homelogo.src = './images/Logo (1).webp';
        }
    }

    window.addEventListener('scroll', changelogo);
    
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


// counter

function counter(){   
    $('.count').each(function(){
        if ($(this).hasClass('start')){
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            if(elementBottom > viewportTop && elementTop < viewportBottom){                               
                if(($(this).text()) % 1 === 0){
                    var decimalpoint = 0;
                }else{
                    var decimalpoint = ($(this).text()).toString().split(".")[1].length;
                }
                $(this).removeClass('start');
                $(this).animate({
                    Counter: $(this).text()
                },{
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(now.toFixed(decimalpoint).toLocaleString('en'));
                    }
                });
            }
        }
    });
}
$(document).on('ready', counter);
$(window).on('scroll', counter);