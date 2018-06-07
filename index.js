$(document).ready(function() {
  $('.catalog-filter-header').on('click', function(e) {
    e.preventDefault();
    $('.catalog-filter-list').toggleClass('mobile-open');
/*    $('.catalog-filter-button').hide('.catalog-filter-list');*/

  });
});

