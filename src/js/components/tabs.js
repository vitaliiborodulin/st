const tabCards = $('.tab__cards .tab__card');

tabCards.on('click', function(){

	tabCards.removeClass('active');
	$(this).addClass('active');
	
	var id = $(this).data('open');
	
	var complTabs = $('.tab__rights .tab__right')
	
	complTabs.slideUp(200);
	$('.tab__rights .tab__right[data-id='+id+']').slideDown(200);
	checkTab();

});

function checkInputs(){
	let sum = 0;
	let inputs =  querySelectorAll('.single-dop__item input[type=checkbox]');
	// $.each(inputs, function(key, val){
	// 	console.log(key, val)
	// })
	console.log(inputs)
	// for (index = 0; index < inputs.length; ++index) {
	// 	console.log(inputs[index]);
	// }
	// for (let i = 0; i++)
	// if (inputs.is(':checked')){
	// 	sum += inputs.data('price');
	// }
}
// checkInputs();

function checkTab() {
	let mainPrice = $('.tab__card.active').data('price');
	$('.price').attr('data-price', mainPrice);
	$('.price').text(prettify(mainPrice));

	let dopPricce =  $('.dop-price').data('price');
	
	$('.final-price').text(prettify(mainPrice + dopPricce) + ' ₽');
	$('.final-price').attr('data-price', mainPrice + dopPricce);
}

checkTab();