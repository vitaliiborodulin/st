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