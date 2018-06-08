$(document).ready(function() {
  $('.catalog-filter-header').on('click', function(e) {
    e.preventDefault();
    $('.catalog-filter-list').toggleClass('mobile-open');
  });

  $('.btn-open').click(function(){
    $('.catalog-filter-list').toggleClass('show');
  });

  $('.checkbox').bind('click', function(e) {
    $(this).addClass('selected');
  });

  $('.catalog-filter-form').submit(function(e) {
    console.log('send');
    return;
  });

});

