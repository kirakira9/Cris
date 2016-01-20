$(function(){
	localStorage.lang = localStorage.lang || "en";
	if(localStorage.lang == "en"){
		console.log("EN");
		$("#headerToggleLang").addClass("langCN");
	}
	else if(localStorage.lang == "cn"){
		console.log("CN");
		$("#headerToggleLang").addClass("langEN");
	}
	
	$("#headerToggleLang").on("click", function(){
		$logo = $("#headerToggleLang");
		if(localStorage.lang == "cn"){
			localStorage.lang = "en";
			location.reload();
		}
		else{
			localStorage.lang = "cn";
			location.reload();
		}
	});
	
	
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

