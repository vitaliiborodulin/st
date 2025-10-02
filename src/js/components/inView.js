function is_fully_shown(target) {
  var wt = $(window).scrollTop(); 
  var wh = $(window).height();    
  var eh = $(target).height();  
  var et = $(target).offset().top;
 
  if (et >= wt && et + eh <= wh + wt){
    return true;
  } else {
    return false;    
  }
}

if(window.innerWidth < 576){
 
    $(window).scroll(function(){

        $('.portfolio__catalog-item').each(function(){
            if (is_fully_shown($(this))) {
                $(this).find('.portfolio__info').css({
                    "transform": "translate3d(0, 0, 0)"
                    }).find('.portfolio__catalog-text').css({
                    "opacity": "1",
                    "display": "block"
                    });
                }
        });
        
    });

    $(document).ready(function(){ 

        $('.portfolio__catalog-item').each(function(){
            if (is_fully_shown($(this))) {
                $(this).find('.portfolio__info').css({
                    "transform": "translate3d(0, 0, 0)"
                    }).find('.portfolio__catalog-text').css({
                    "opacity": "1",
                    "display": "block"
                    });
                }
        });
        
    });

}