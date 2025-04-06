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
    

    $('input[type="tel"]').inputmask("+7 (999) 999-99-99");
    
    $('.btn-popup').on('click', function () {
        const text = $(this).attr('data-title');
        // $('.popup__aim').text(text);
        // $('#get-projects .form__title').html(text);
        // console.log(text);
        $('#get-projects input[name=project]').val(text);
        getDops();
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