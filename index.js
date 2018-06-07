$(document).ready(function() {
  $('.catalog-filter-header').on('click', function(e) {
    e.preventDefault();
    $('.catalog-filter-list').addClass('mobile-open');
  });

  $('.catalog-filter-button').on('click', function(e) {
    e.preventDefault();
    $('.catalog-filter-list').removeClass('mobile-open');
  });

  $(function(){
    $('.btn-open').click(function(){
      $('.catalog-filter-list').toggleClass('show');
    });
  });

  $('.checkbox').bind('click', function(e) {
    $(this).addClass('selected');
  });

  $('.catalog-filter-row').submit(function(e) {
    console.log('send');
  });

});

