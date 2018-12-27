function Shape(x,y){
	this.pos = createVector(x,y);
	this.target = createVector(random(width),random(height));
	this.r = random(1,10);
	this.color = { 'r' : random(0,255),'g': random(0,255),'b':random(0,255)};
	this.vel = createVector();
	this.acc = createVector();
	this.maxSpeed = 5;

	this.update = function(){
		this.pos.add(this.vel);
		this.vel.add(this.acc);
		// this.vel.mult(0.99);
		this.acc.mult(0);
		if((this.pos.x - this.r) < 0 || (this.pos.x + this.r) > (width + 1)){
			this.vel.x *= (-1);
		} else if((this.pos.y - this.r) < 0 || (this.pos.y + this.r) > (height + 1)){
			this.vel.y *= (-1);
		}
	}

	this.applyForce = function(force){
		this.acc.add(force);
	}

	this.behaviour = function(){
		let steer = this.locate();
		if(toRepulse){
			let repulseForce = this.mouseRepulse();
			this.applyForce(repulseForce);
		}
		this.applyForce(steer);
	}

	this.locate = function(){
		let desired = p5.Vector.sub(this.target,this.pos);
		let dist = desired.mag();
		var speed = this.maxSpeed;
		if(dist < 100){
			speed = map(dist, 0, 100, 0, this.maxSpeed);
		}
		desired.setMag(speed);
		let steerForce = p5.Vector.sub(desired,this.vel);
		steerForce.limit(0.3);
		return steerForce;
	}

	this.mouseRepulse = function(){
		let desired = p5.Vector.sub(createVector(mouseX,mouseY),this.pos);
		let dist = desired.mag();
		if(dist < repulseDistance){
			desired.setMag(10);
			desired.mult(-1);
			let repulseForce = p5.Vector.sub(desired,this.vel);
			repulseForce.limit(1);
			// console.log(repulseForce);
			return repulseForce;
		} 
		return createVector();
	}	


	this.show = function(){
		noStroke();
		fill(this.color.r,this.color.g,this.color.b,opacity);
		ellipse(this.pos.x, this.pos.y, this.r*2 , this.r*2);
	}
}