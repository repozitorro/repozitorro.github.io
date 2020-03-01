$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 1400,
        fade: true,
        infinite: true,
        //adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        responsive: [{
            breakpoint: 800,
            settings: {
                autoplay: true,
                dots: false,
                arrows: false
            }
        }]
    });
});