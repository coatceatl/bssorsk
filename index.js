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


  $('.checkbox').bind('click', function(e) {
    $(this).addClass('selected');
    console.log('clicked ' + this.nodeName);
  });
});

