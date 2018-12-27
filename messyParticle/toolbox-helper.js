$(function() {


	$(".slider-repulse").change(function(){
		$(".repulse").val($(this).val());
		repulseDistance = parseInt($(this).val());
	});

    $(".slider-opacity").change(function(){
        $(".opacity").val($(this).val());
        opacity = parseInt($(this).val());
    });

    $(".slider-addParticles").change(function(){
        $(".addParticles").val($(this).val());
        addParticle = parseInt($(this).val());
    });

	$(".slider-nop").change(function(){
		var value = $(this).val();
		$(".nop").val(value);

		if(shapes.length > value){
			removeShapes(shapes.length - value);
		} else {
			addShapes(value,shapes.length);
		}
	});

	$(".toAddParticles").change(function(){
      toAddParticles = !toAddParticles; 
    });

    $(".toRepulse").change(function(){
      toRepulse = !toRepulse; 
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
