
var $grid = $('.collection-list').isotope({

});

$('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    resetFilterBtns()
    $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns(){
  filterBtns.each(function(){
    $(this).removeClass('active-filter-btn');
  });
}

$(document).ready(function(){
  $("#submit").click(function(){
    alert("Thanks for your interest! We'll be in touch soon.");
  });
});
