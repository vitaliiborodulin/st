function createCookie(name, value, days) {
    var expires;

    if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
    } else {
            expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
            x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
            x = x.replace(/^\s+|\s+$/g, "");
            if (x == c_name) {
                    return unescape(y);
            }
    }
}

$(function() {


    $( '#filter' ).submit(function(){
        var filter = $(this);
        $.ajax({
            url : true_obj.ajaxurl, // обработчик
            data : filter.serialize(), // данные
            type : 'POST', // тип запроса
            beforeSend : function( xhr ){
                filter.find( '.submit-btn' ).text( 'Думаем...' ); // изменяем текст кнопки
            },
            success : function( data ){
                filter.find( '.submit-btn' ).text( 'Фильтровать' ); // возвращаем текст кнопки
                $( '#response' ).html(data);
            }
        });
        return false;
    });

    $('#filter select').on('change', function(){
        
        let selectItem = $(this).attr('id');
        let selectItemValue = this.value;
        
        createCookie(selectItem, selectItemValue, '1');
        

        $('div.more').hide();

        const filter = $('#filter');
        $.ajax({
            url : true_obj.ajaxurl, // обработчик
            data : filter.serialize(), // данные
            type : 'POST', // тип запроса
            success : function( data ){
                $( '#response' ).html(data);
            }
        });

        return false;

    });


    $( '#reset' ).on('click', function(){
        createCookie('floor', '', '-1');
        createCookie('price', '', '-1');
        createCookie('square', '', '-1');
        location.reload(true);
    });

});