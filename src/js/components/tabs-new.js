if(document.querySelector('.compl__list')){

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

	checkTab();
});

// проверяет активный tab и ставит по нему цену комплектации и финальную цену
function checkTab() {
	let mainPrice = $('.compl__item.active').data('price');
	$('.price').attr('data-price', mainPrice);
	$('.price').text(prettify(mainPrice));

	let open = $('.compl__item.active').data('open');
	$('#get-projects input[name=complect]').val(open);

	let dopPricce =  $('.dop-price').data('price');
	checkSum();
	
}

	checkTab();

}