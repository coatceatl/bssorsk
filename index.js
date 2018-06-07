$(document).ready(function() {
  $('.catalog-filter-header').on('click', function(e) {
    e.preventDefault();
    $('.catalog-filter-list').toggleClass('mobile-open');
  });

  $(function(){
    $('.btn-open').click(function(){
      $('.catalog-filter-list').toggleClass('show');
    });
  });

  $('.catalog-filter-row').submit(function(e) {
    console.log('send');
  });

  $('.checkbox').bind('click', function(e) {
    $(this).addClass('selected');
  });
});

