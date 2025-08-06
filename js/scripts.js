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
    function animateNav() {
        var win_scroll = $(window).scrollTop(),
                win_height = $(window).height(),
                main_nav = $('.header'),
                main_nav_offset = '',
                scroll_by = 100;
    
        main_nav_offset = $(main_nav).outerHeight();
    
        if (win_scroll > scroll_by) {
                $(main_nav).addClass('sticky-nav');
                window.setTimeout(function() {
                        $(main_nav).addClass('fix');
                }, 200);
        } else {
                $(main_nav).removeClass('sticky-nav fix');
        }
    
    }
    
    // animateNav();
    
    // $(window).on('load scroll', function() {
    //     animateNav();
    // });
    
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
    // $('.hero__slider').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     // infinite: true,
    //     // speed: 500,
    //     arrows: false,
    //     fade: true,
    //     cssEase: 'linear',
    //     dots: true,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     pauseOnFocus: false,
    //     pauseOnHover: false
    // });
    
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
    
      $('.single-main__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        fade: true,
        asNavFor: '.single-main__nav-slider'
      });
    
      $('.single-main__nav-slider').slick({
        slidesToShow: 3,
        asNavFor: '.single-main__slider',
        // dots: true,
        // centerMode: true,
        arrows: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2
                }
            }
        ]
      });
    
    
      $('.single-plan__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // infinite: true,
        // speed: 500,
        // arrows: false,
        // fade: true,
        // cssEase: 'linear',
        // dots: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // pauseOnFocus: false,
        // pauseOnHover: false
    });
    
      $('.portfolio__main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        // adaptiveHeight: true,
        asNavFor: '.portfolio__nav-slider'
      });
    
      $('.portfolio__nav-slider').slick({
        slidesToShow: 3,
        asNavFor: '.portfolio__main-slider',
        // dots: true,
        centerMode: true,
        arrows: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2
                }
            }
        ]
      });
    
      // $('.portfolio-other__slider').slick({
      //   slidesToShow: 2.7,
      //   slidesToScroll: 1,
      //   // dots: true,
      //   // arrows: true,
      //   infinite: true,
      //   speed: 500,
      //   nextArrow: $('.portfolio-other__arrow .arrow-next'),
      //   prevArrow: $('.portfolio-other__arrow .arrow-prev'),
      //   responsive: [
      //       {
      //           breakpoint: 968,
      //           settings: {
      //               slidesToShow: 1.7
      //           }
      //       }
      //   ]
      // });
    if(document.querySelector('.tab__cards')){
    
    const tabCards = $('.tab__cards .tab__card');
    
    tabCards.on('click', function(){
    
    	tabCards.removeClass('active');
    	$(this).addClass('active');
    	
    	const open = $(this).attr('data-open');
    	$('#get-projects input[name=complect]').val(open);
    	
    	var id = $(this).data('open');
    	
    	var complTabs = $('.tab__rights .tab__right')
    	
    	complTabs.slideUp(200);
    	$('.tab__rights .tab__right[data-id='+id+']').slideDown(200);
    	checkTab();
    
    });
    
    
    // проверяет активный tab и ставит по нему цену комплектации и финальную цену
    function checkTab() {
    	let mainPrice = $('.tab__card.active').data('price');
    	$('.price').attr('data-price', mainPrice);
    	$('.price').text(prettify(mainPrice));
    
    	let dopPricce =  $('.dop-price').data('price');
    	checkSum();
    	
    }
    
    	checkTab();
    
    }
    const compls = $('.compl__item');
    
    compls.on('click', function(){
        compls.removeClass('active').find('input[type=checkbox]').prop('checked', false);
    
       const checkboxDop = $(this).find('input[type=checkbox]');
    
       if (checkboxDop.is(':checked')){
    	    checkboxDop.prop('checked', false);
            $(this).removeClass('active');
    
           
        } else {
            checkboxDop.prop('checked', true);
            $(this).addClass('active');
           
        }
    });
    let price = $('.price'); //цена комплектации дома
    let dopPrice = $('.dop-price'); //цена допов
    let finalPrice = $('.final-price'); //финальная цена
    
    let priceNum = price.data('price');
    let dopPriceNum = dopPrice.data('price');
    let finalPriceNum = finalPrice.data('price');
    
    $('.single-dop__item').on('click', function(){
       const checkboxDop = $(this).find('input[type=checkbox]');
       if (checkboxDop.is(':checked')){
    	    checkboxDop.prop('checked', false);
            $(this).removeClass('active');
            // $(this).css('transform', 'none');
    
            dopPriceNum -= checkboxDop.data('price');
    
            dopPrice.text(prettify(dopPriceNum));
            dopPrice.attr('data-price', dopPriceNum);
    
            checkSum();
        } else {
            checkboxDop.prop('checked', true);
            $(this).addClass('active');
            // $(this).css('transform', 'scale(0.9)');
    
            dopPriceNum += checkboxDop.data('price');
    
            dopPrice.text(prettify(dopPriceNum));
            dopPrice.attr('data-price', dopPriceNum);
    
            checkSum();
        }
    });
    
    function getDops() {
        const dopsArr = [];
    
        $('.single-dop__item.active').each(function (index, element) {
            let dop = $(element).find(".single-dop__t").text();
            dopsArr.push(dop);
       }); 
      
       $('#get-projects input[name=dops]').val(dopsArr);
        // return number;
      }
    
    function checkSum(){
        let one = $('.price').attr('data-price');
        let two = $('.dop-price').attr('data-price');
        // console.log(one, two);
    
        $('.final-price').text(prettify(parseFloat(one) + parseFloat(two)) + ' ₽');
        $('.final-price').attr('data-price', parseFloat(one) + parseFloat(two));
    }
    
    // for(var i = 0; i <= inputs.length; i++){
    const ipo = document.getElementById('ipo');
    
    if(ipo){
    
    /* Значения из текстовых инпутов */
    const totalCost = document.getElementById('cost'),
        anInitialFee = document.getElementById('initial'),
        creditTerm = document.getElementById('term'),
        creditRate = document.getElementById('rate');
    
    /* Все number input */
    const inputsNumber = ipo.querySelectorAll('input');
    
    /* Итоговые значения */
    const totalMonthlyPayment = document.querySelector('.ipo__sum'),
        totalAmountOfCredit = document.querySelector('.ipo__total');
    //     totalMonthlyPayment = document.getElementById('monthly-payment'),
    //     totalRecommendedIncome = document.getElementById('recommended-income');
    
    /* Пересчет для number inputs */
    for (number of inputsNumber){
        number.addEventListener('change', () => {
            // totalCostRange.value = totalCost.value;
            // anInitialFeeRange.value = anInitialFee.value;
            // creditTermRange.value = creditTerm.value;
            calculation(totalCost.value, anInitialFee.value, creditTerm.value, creditRate.value);
        })
    }
    
    // let currentPercent = creditRate.value;
    
    const calcBtn = document.querySelector('.ipo-btn');
    
    /* Рассчет кредита */
    const calculation = (totalCost = 2000000, anInitialFee = 50000, creditTerm = 15, currentPercent = 9.5) => {
        /* 
            ЕП - ежемесячный платеж; 
            РК - размер кредита; 
            ПС - процентная ставка; 
            КМ - количество месяцев
    
            ЕП = (РК + (((РК / 100) * ПС) / 12 ) * КМ) / КМ
        */
        
        let lounAmount = totalCost - anInitialFee //РК - размер кредита
        let interestRate = currentPercent; //ПС - процентная ставка
        let numberOfMonths = creditTerm * 12; //КМ - количество месяцев
    
        let monthlyPayment = (lounAmount + ((((lounAmount / 100) * interestRate) / 12) * numberOfMonths)) / numberOfMonths; //ЕП - ежемесячный платеж
        let monthlyPaymentArounded = Math.round(monthlyPayment);
    
        if (monthlyPaymentArounded < 0) {
            return false;
        } else {
            // totalAmountOfCredit.innerHTML = `${lounAmount} руб.`;
            totalMonthlyPayment.innerHTML = `${prettify(monthlyPaymentArounded)} руб. в месяц`;
            // totalRecommendedIncome.innerHTML = `${monthlyPaymentArounded + (monthlyPaymentArounded / 100) * 35} руб.`; //+35%
        }
    }
    
    
        calculation();
        calcBtn.addEventListener('click', calculation(totalCost.value, anInitialFee.value, creditTerm.value, creditRate.value));
    }
    
    $('select').niceSelect();
    
    
    document.addEventListener( 'wpcf7mailsent', function( event ) {
        // if(event.detail.contactFormId=="224"){
            // onclick=yaCounter26043108.reachGoal('formsend'); return true;
            // }
            
            $(".form form").hide();
            $(".form .form__thank").show();
            
    }, false );
        
        
});