$(document).ready(function() {
    const navMenu = $('.nav__menu');
    const navOpenBtn = $('.nav__toggle-open');
    const navCloseBtn = $('.nav__toggle-close');
    const checkbox = $('#checkbox');

    $("#pokedex").on('click', function(){
        window.open("https://angxlo-r.github.io/pokedex/pages/main.html", "__blank")
    })

    checkbox.change(function() {
        $('body').toggleClass('dark');
    });

    const openNavHandler = () => {
        navMenu.css('display', 'flex');
        navOpenBtn.css('display', 'none');
        navCloseBtn.css('display', 'inline-block');
    }

    const closeNavHandler = () => {
        navMenu.css('display', 'none');
        navOpenBtn.css('display', 'inline-block');
        navCloseBtn.css('display', 'none');
    }

    navOpenBtn.on('click', openNavHandler);

    navCloseBtn.on('click', closeNavHandler);

    const navItems = navMenu.find('a');

    if ($(window).innerWidth() < 768) {
        navItems.on('click', closeNavHandler);
    }
});