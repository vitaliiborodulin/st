$(function() {

    // Fancybox.bind("[data-fancybox]", {
    //     // Your custom options
    //     // animated: false
    // });

    // $(".btn").fancybox();

    $('.news__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 500,

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