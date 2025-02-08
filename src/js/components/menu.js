// var menuToggle = 'button.header__menu-toggle';
// var navToMenu = 'div.header__menu';

// if ($(navToMenu).length) {
//     $(menuToggle).click(function() {
//         $('html').addClass('menu-active');
//     });

//     $('body').append('<div class="menu-overlay"></div><div class="menu"><div class="menu__inner">' + $(navToMenu).html() + '</div></div>');


// }

const burger = $('.header__burger');
const menu = $('.header__menu');
// const bg = $('.menu__outer');

burger.on('click', function(e) {
    e.preventDefault();
    burger.toggleClass('header__burger--close');
    menu.toggleClass('open').toggle(300);
    // bg.toggleClass('bg');
    $('html, body').toggleClass('overflow');
});

$(document).keyup(function(e) {
    if (e.key === "Escape" || e.keyCode === 27) {
        menu.removeClass('open');
        burger.removeClass('header__burger--close');
        $('html, body').removeClass('overflow');
    }
});