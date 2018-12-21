$(function() {


	$(".slider-speed").change(function(){
		$(".speed").val($(this).val());
		speed = parseInt($(this).val());
	});

	$(".slider-nop").change(function(){
		var value = $(this).val();
		$(".nop").val(value);

		if(stars.length > value){
			removeStars(stars.length - value);
		} else {
			addStars(value,stars.length);
		}
	});

	$(".origin-move").change(function(){
      originMove = !originMove;
    });

    $(".reset-origin").click(function(){
    	translateX = width / 2;
    	translateY = height / 2;
    	$(".origin-move"). prop("checked", false);
    	originMove = !originMove;
    });

    $(".show-line").click(function(){
    	if($(this).attr("data-status") == "hide"){
    		$(this).attr("data-status","show");
    		$(this).text("Show Line behind stars");
    	} else {
    		$(this).attr("data-status","hide");
    		$(this).text("Hide Line behind stars");
    	}
    	showLine = !showLine;
    });
});
