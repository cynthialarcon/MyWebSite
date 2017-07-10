$(document).ready(function(){

// Efecto Header
	if( $(window).width() > 800 ){
		$('header .text').css({
			opacity: 0,
			marginTop: 0
		});

		$('header .text').animate({
			opacity: 1,
			marginTop: '-52px'
		}, 1500);
	}


	$('#btn-aboutme').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: acercaDe - 100
		}, 500);
	});
});
