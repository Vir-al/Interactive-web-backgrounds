let shapes = [];
let totalParticle = 150;
let addParticle = 10;

function setup(){
	createCanvas(windowWidth,windowHeight);
	for(let i = 0 ; i < totalParticle ; i++){
		shapes[i] = new Shape(random(width),random(height));
	}
	mouseX = -200;
	mouseY = -200;
}

function mousePressed(){
	for(var i = 0 ; i < addParticle ; i++){
		shapes.splice(0,1);
		shapes.push(new Shape(mouseX,mouseY));
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

