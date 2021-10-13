// input number stylisation

$('.handle-counter').each(function() {
    $(this).handleCounter({
        minimum: 1,
        maximize: null,
    });
});

// slick sliders

$(document).ready(function() {
    $('.single-item').not('.slick-initialized').slick({
        dots: true,
        initialSlide: 2,
    });

    $('.promo-line .lil-container').slick({
        dots: false,
        initialSlide: 1,
        arrows: false,
        mobileFirst: true,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                dots: true,
            }
            }
        ]
    });

    $('.product-slider').slick({
        centerMode: true,
        slidesToShow: 1,
        mobileFirst: true,
        initialSlide: 2,
        infinite: true,
        responsive: [
            {
            breakpoint: 500,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 3
            }
            },
            {
            breakpoint: 767,
            settings: {
                arrows: false,
                centerMode: true,
                initialSlide: 0,
                slidesToShow: 4
            }
            },
            {
            breakpoint: 1024,
            settings: {
                arrows: true,
                centerMode: false,
                centerPadding: '0px',
                slidesToShow: 6
            }
            }
        ]
    });

    $('.insta-slider').slick({
        centerMode: true,
        mobileFirst: true,
        initialSlide: 2,
        slidesToShow: 1,
        infinite: true,
        responsive: [
            {
            breakpoint: 425,
            settings: {
                arrows: false,
                centerMode: true,
                initialSlide: 0,
                slidesToShow: 2
            }
            },
            {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 5
            }
            },
        ]
    });

    $('.customer-slider').slick({
        centerMode: true,
        mobileFirst: true,
        initialSlide: 1,
        slidesToShow: 1,
        infinite: true,
        responsive: [
            {
            breakpoint: 425,
            settings: {
                arrows: false,
                centerMode: true,
                initialSlide: 0,
                slidesToShow: 2
            }
            },
            {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 4
            }
            },
        ]
    });
});


// menu

const menuTrigger = document.querySelector('[data-menu]'),
      menu = document.querySelector('.opened-menu'),
      menuClose = document.querySelector('[data-close]'),
      submenuTrigger = document.querySelectorAll('[data-opensubmenu]');

menuTrigger.addEventListener('click', () => {
    menu.classList.add('show');
    menu.classList.remove('hide');
});

function closeMenu() {
    menu.classList.add('hide');
    menu.classList.remove('show');
};

menuClose.addEventListener('click', closeMenu);

document.addEventListener('keydown', (e) => {
    if(e.code === "Escape") {
        closeMenu();
    }
})

document.body.addEventListener('click', (e) => {
    if(e.target !== menu && e.target !== menuTrigger && !e.target.closest('.opened-menu')) {
        closeMenu();
    }
})

submenuTrigger.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentNode.classList.toggle('is-opened');
    })
})

// cart

const cartTrigger = document.querySelector('[data-cart]'),
      cart = document.querySelector('[data-openedCart]');

cartTrigger.addEventListener('click', () => {
    cart.classList.toggle('show');
})

document.body.addEventListener('click', (e) => {
    if(e.target !== cart && e.target !== cartTrigger && !e.target.closest('.header-mini-cart')) {
        cart.classList.add('hide');
        cart.classList.remove('show');
    }
})



