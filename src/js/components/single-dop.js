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
        dopPriceNum -= checkboxDop.data('price');

        dopPrice.text(prettify(dopPriceNum));
        dopPrice.attr('data-price', dopPriceNum);

        finalPrice.text(prettify(dopPriceNum + priceNum) + ' ₽');
        finalPrice.attr('data-price', dopPriceNum + priceNum);
    } else {
        checkboxDop.prop('checked', true);
        dopPriceNum += checkboxDop.data('price');

        dopPrice.text(prettify(dopPriceNum));
        dopPrice.attr('data-price', dopPriceNum);

        finalPrice.text(prettify(dopPriceNum + priceNum) + ' ₽');
        finalPrice.attr('data-price', dopPriceNum + priceNum);
    }
});

function prettify(num) {
    var n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
}

// setPrice($('.tab__card.active'));
// setTimeout(setPrice($('.tab__card.active'), 5000));
// setTimeout(setSum, 2000);


