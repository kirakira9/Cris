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
	setTimeout(function(){	
		$("li.active > a").click(function(e){
			e.preventDefault();
		});
	}, 500);
});

