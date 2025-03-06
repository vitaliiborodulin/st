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

    
    $('input[type="tel"]').mask("+7 (999) 999-99-99");
    
    $('.btn-popup').on('click', function () {
        var text = $(this).attr('data-text');
        // $('.popup__aim').text(text);
        // $('#get-projects .form__title').html(text);
        $('#get-projects input[type=hidden]').val(text);
    });
    
    function prettify(num) {
        var n = num.toString();
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
    }
    
    //= components/faq.js
    //= components/menu.js
    //= components/slider.js
    //= components/tabs.js
    //= components/dop.js
    //= components/calc.js
    
    $('select').niceSelect();


    document.addEventListener( 'wpcf7mailsent', function( event ) {
        // if(event.detail.contactFormId=="224"){
        // onclick=yaCounter26043108.reachGoal('formsend'); return true;
        // }
    
        $(".form form").hide();
        $(".form .form__thank").show();
    
    }, false );
    

});