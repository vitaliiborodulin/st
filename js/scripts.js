$(function() {

    $('.faq__ask').on('click', function () {
        const answer = $(this).next();
    
        if (!$(this).hasClass('active')){
            $('.faq__ask').removeClass('active');
            $('.faq__answer').slideUp(300);
            $(this).addClass('active');
            answer.slideDown(300);
        } else {
            $(this).removeClass('active');
            answer.slideUp(300);
        }
    });

    // $(".fancyone").fancybox();

    $('[data-fancybox]').fancybox({
        toolbar  : false,
        smallBtn : true,
        iframe : {
            preload : false
        }
    });

    $('.news__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 500,

        // prevArrow: '<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M119 47.3166C119 48.185 118.668 48.9532 118.003 49.6212L78.8385 89L118.003 128.379C118.668 129.047 119 129.815 119 130.683C119 131.552 118.668 132.32 118.003 132.988L113.021 137.998C112.356 138.666 111.592 139 110.729 139C109.865 139 109.101 138.666 108.436 137.998L61.9966 91.3046C61.3322 90.6366 61 89.8684 61 89C61 88.1316 61.3322 87.3634 61.9966 86.6954L108.436 40.002C109.101 39.334 109.865 39 110.729 39C111.592 39 112.356 39.334 113.021 40.002L118.003 45.012C118.668 45.68 119 46.4482 119 47.3166Z" fill="black"></path></svg>',
		// nextArrow: '<div class="carousel-button slick-next"><svg class="icon" width="10" height="24"><use xlink:href="#i-next"></use></svg></div>',

        // autoplay: true,
        // autoplaySpeed: 2000,

        responsive: [
            {
                breakpoint: 1416,
                settings: {
                  
                //   centerMode: true,
                //   centerPadding: '40px',
                  slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    // arrows: false,
                    slidesToShow: 1
                }
            }
        ]
      });

});