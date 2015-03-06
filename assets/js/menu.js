$(document).ready(function(){
	var nav = $('#nav'),
		pos = nav.offset(); //obtem a posição do nav em relação ao documento
		$(window).scroll(function(){
			if($(this).scrollTop() > pos.top+nav.height() && nav.hasClass('invisivel')){
				nav.fadeOut('fast', function(){
					$(this).removeClass('invisivel').addClass('visivel').fadeIn('fast');
				});
			} else if($(this).scrollTop() <= pos.top && nav.hasClass('visivel')) {
				nav.fadeOut('fast', function(){
					$(this).removeClass('visivel').addClass('invisivel').fadeOut('fast');
				});
			}
		});

		// tutorial em http://www.1stwebdesigner.com/tutorials/create-stay-on-top-menu-css3-jquery/

});