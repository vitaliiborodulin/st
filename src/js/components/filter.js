$( '#filter' ).submit(function(){
    var filter = $(this);
    $.ajax({
        url : true_obj.ajaxurl, // обработчик
        data : filter.serialize(), // данные
        type : 'POST', // тип запроса
        beforeSend : function( xhr ){
            filter.find( '.submit-btn' ).text( 'Loading...' ); // изменяем текст кнопки
        },
        success : function( data ){
            filter.find( '.submit-btn' ).text( 'Filter' ); // возвращаем текст кнопки
            $( '#response' ).html(data);
        }
    });
    return false;
});