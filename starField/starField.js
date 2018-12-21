// Code by Viral Limbani
// Animated Star Field


//Star class
function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;

  this.update = function() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  this.show = function() {
    fill(255);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 16, 0);
    ellipse(sx, sy, r, r);

    if(showLine) {
      var px = map(this.x / this.pz, 0, 1, 0, width);
      var py = map(this.y / this.pz, 0, 1, 0, height);

      this.pz = this.z;

      stroke(255);
      line(px, py, sx, sy);
    }
  }
}


var stars = [];

var speed = 20;
var colX , colY;
var window_w , window_h;
var originMove = false;
var translateX, translateY;
var showLine = true;


function setup() {

  createCanvas(windowWidth,windowHeight);
  for (var i = 0; i < 800; i++) {
    stars[i] = new Star();
  }

  translateX = width / 2;
  translateY = height / 2;


  $(".slider-speed").val(speed);
  $(".speed").val(speed);

  $(".slider-nop").val(stars.length);
  $(".nop").val(stars.length);
}

function draw() {
  //speed = map(mouseX, 0, width, 0, 50); //To map the speed with mouse position

  if(originMove){
    translateX = mouseX; // To move origin according to the mouse position
    translateY = mouseY;
  }

  translate(translateX,translateY); // To Keep the origin at particular position
  translate(width / 2,height / 2); // To center the origin of stars

  //Draw stars with background
  background(204,0,57);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function addStars(newNumber, oldNumber) {
  for (var i = newNumber; i > oldNumber; i--) {
    stars.push(new Star());
  }
}

function removeStars(number) {
  stars.splice(1,number);
}