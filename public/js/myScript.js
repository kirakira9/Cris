$(function(){
	if($('.carousel').length > 0){
		$('.carousel').fadeIn('slow', function(){
			$('.fade').addClass('in');
		});
	}
	else{
			$('.fade').addClass('in');
	}
	
	$('.carousel').carousel({
        interval: 5000 //changes the speed
    });
	
	$("#btnParagraph1").on("click",function(e){
		e.preventDefault();
	});
	$("#btnParagraph2").on("click", function(e){
		e.preventDefault();
	});
	$("#btnParagraph3").on("click", function(e){
		e.preventDefault();
	});
	// $(".about .collapse.in").collapse({toggle: true});
	// $("#capability #paragraph2").collapse('hide');
	// $("#capability #paragraph3").collapse('hide');
	
});

