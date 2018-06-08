$(document).ready(function() {
  $('.catalog-filter-header').on('click', function(e) {
    e.preventDefault();
    $('.catalog-filter-list').toggleClass('mobile-open');
  });

  $('.btn-open').click(function(){
    $('.catalog-filter-list').toggleClass('show');
  });

  $('.checkbox').on('click', function(e) {
    $(this).toggleClass('selected');
  });

  $('.btn-applying').click(function() {
    $(this).parents('.catalog-filter-item').toggleClass('selected');
  });
});

