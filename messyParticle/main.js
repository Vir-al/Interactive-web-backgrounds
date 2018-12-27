let shapes = [];
let totalParticle = 150;
let addParticle = 10;
let repulseDistance = 150;
let opacity = 100;
let toAddParticles = false;
let toRepulse = true;

function setup(){
	createCanvas(windowWidth,windowHeight);
	for(let i = 0 ; i < totalParticle ; i++){
		shapes[i] = new Shape(random(width),random(height));
	}
	mouseX = -200;
	mouseY = -200;

	$(".slider-nop").val(shapes.length);
	$(".nop").val(shapes.length);

	$(".slider-repulse").val(repulseDistance);
	$(".repulse").val(repulseDistance);

	$(".slider-opacity").val(opacity);
	$(".opacity").val(opacity);

	$(".slider-addParticles").val(addParticle);
	$(".addParticles").val(addParticle);

}

function mousePressed(){
	if(toAddParticles){
		for(var i = 0 ; i < addParticle ; i++){
			shapes.splice(0,1);
			shapes.push(new Shape(mouseX,mouseY));
		}
	}
}

function draw(){
	 background(255);

	for(let i = 0 ; i < shapes.length ; i++){
		shapes[i].show();
		shapes[i].update();
		shapes[i].behaviour();
	}
	
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function addShapes(newNumber, oldNumber) {
  for (var i = newNumber; i > oldNumber; i--) {
    shapes.push(new Shape(random(width),random(height)));
  }
}

function removeShapes(number) {
  shapes.splice(1,number);
}