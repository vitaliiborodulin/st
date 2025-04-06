if ($('div.more').length) {
    $('body').on('click', '.btn-more:not(.loading)', function () {
      var more = $(this);
      var container = $(this).closest('div.more').prev('div');
      var defaultText = more.html();
      var offset = more.data('offset');
      var items = more.data('items');
      var max = more.data('max');
      var query = 'offset=' + offset + '&items=' + items;
      more.addClass('loading').text(more.data('loading'));
      $.ajax({
        url: '/wp-content/themes/st/ajax-posts.php?' + query
      }).done(function (html) {
        container.append(html);
        more.data('offset', offset + items).removeClass('loading').html(defaultText);
        // $('html, body').animate({scrollTop: $('div.news__content .js-item-scroll-to:last()').offset().top - 30 }, 700);
        if (more.data('offset') >= max) more.parent().remove();
      });
    });
  }