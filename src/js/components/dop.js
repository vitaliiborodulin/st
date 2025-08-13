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



