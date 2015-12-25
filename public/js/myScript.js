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
        interval: 3000 //changes the speed
    });
	setTimeout(function(){	
		$("li.active > a").click(function(e){
			e.preventDefault();
		});
	}, 500);
	$(".serviceBlock").height($(".serviceBlock").width());
	$(window).resize(function(){
		$(".serviceBlock").height($(".serviceBlock").width());
	});
});

