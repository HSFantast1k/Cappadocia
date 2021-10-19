$(function(){
    $(".fairy-tail__slider, .our-trip__slider").slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prew.svg" alt="Prew"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt="Next"></button>',
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        responsive: [{
            breakpoint: 601,
            settings: {
                arrows: false,
                dots: true,
            }
        }]
    });
});