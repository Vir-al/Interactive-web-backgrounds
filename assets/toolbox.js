
$(document).ready(function(){

	$(".property-container").draggable();

	$(".toggle-button").click(function(){
		$(".property-values").slideToggle();
		var icon = "<center>";
		if($(".toggle-button").attr("data-status") == "up") {
			icon += '<span class="glyphicon glyphicon-chevron-down"></span>';
			$(".toggle-button").attr("data-status","down");
		} else {
			$(".toggle-button").attr("data-status","up");
			icon += '<span class="glyphicon glyphicon-chevron-up"></span>';
		}
		icon += "</center>";
		$(".toggle-button").html(icon);
	});
});