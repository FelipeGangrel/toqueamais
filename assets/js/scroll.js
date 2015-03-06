$(document).ready(function(){
	//apenas para links que começam com o texto 'area'
	$('a[href^="#area"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash,
	    $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;

	    });
	});

});

