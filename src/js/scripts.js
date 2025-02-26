$(function() {

    $('[data-fancybox]').fancybox({
        // thumbs : { autoStart:true },
        toolbar: "auto",
        infobar: true,
        smallBtn: "auto",
        protect: true,
        loop: true,
        iframe : {
            preload : false
        }
    });

    $('select').niceSelect();

    $('input[type="tel"]').mask("+7 (999) 999-99-99");

    $('.btn-popup').on('click', function () {
        var text = $(this).attr('data-text');
        // $('.popup__aim').text(text);
        // $('#get-projects .form__title').html(text);
        $('#get-projects input[type=hidden]').val(text);
    });

    //= components/faq.js
    //= components/menu.js
    //= components/slider.js
    //= components/tabs.js
    //= components/single-dop.js
    //= components/calc.js



    document.addEventListener( 'wpcf7mailsent', function( event ) {
        // if(event.detail.contactFormId=="224"){
        // onclick=yaCounter26043108.reachGoal('formsend'); return true;
        // }
    
        $(".form form").hide();
        $(".form .form__thank").show();
    
    }, false );
    

});