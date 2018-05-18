

var numWalkers;
var all_diam;
var average_diam;

var r = [];

var walkers = [];

var img = [];
var pg1;
var pg2;

var current_img = 0;

var resetWalkers = false;

function preload() { // We have to load image before setup()
  img[0] = loadImage("img/sketch/cat.jpg");
  // for (var i = 1; i <= 5; i++) {
  //     img[i] = loadImage("img/sketch/merle_"+[i]+".jpg");
  // }
}

function setup() {
  var canv = createCanvas(windowWidth, windowHeight);
  // make div#can the parent of the created canvas
  canv.parent("can");

  pixelDensity(1); // Set 1 because it's too slow on firefox
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();

  numWalkers = random(12, 18);
  for (var i = 0; i <= numWalkers; i++) {
    walkers.push(new Walker());
  }

  pg1 = createGraphics(width, height);
  // pg1.parent("can");
  pg2 = createGraphics(width, height);
  // pg2.parent("can");
  pg1.background('#FFFFFF');
}

function draw() {
  for (var i = 0; i < walkers.length; i++) {
    walkers[i].step();
  }

  pg1.noFill();
  for(var i = 0; i < walkers.length; i++) {
    walkers[i].render();
  }

  pg2.clear();
  //pg2.blendMode(ADD);
  //pg2.blendMode(LIGHTEST);
  pg2.blendMode(SCREEN);
  pg2.image(img[current_img], 0, 0, width, height);
  pg2.image(pg1, 0, 0, width, height);

  image(pg2, 0, 0, width, height);


  // if (resetWalkers) {
  //   pg1.background('#FFFFFF');
  //
  //
  //   for (var i = 0; i <= numWalkers; i++) {
  //     walkers.pop();
  //   }
  //
  //   numWalkers = random(12, 18);
  //   for (var i = 0; i <= numWalkers; i++) {
  //     walkers.push(new Walker());
  //   }
  //
  //   // current_img += 1;
  //   // if (current_img > 5) {
  //   //   current_img = 1;
  //   // }
  // }
}

function root() {

  this.loc = createVector(width/2, height/2);
  this.speed = createVector();
  this.speed = p5.Vector.random2D();
  this.bam = createVector();
  this.diam = width/20;
  this.angle = random(TAU); // TAU = TWO_PI (btw)
  this.c = color(random(360), 100, 50, 30);

  this.init = function() {
    this.loc.set(width/2, height/2);
    this.diam = width/20;
    this.angle = random(TAU);
    this.c = color(random(360), 100, 50, 30);
  }

  this.update = function() {
    this.diam -= random(0.01, 0.05);
    this.diam = constrain(this.diam, 0.5, width/20);

    if (this.diam >= .5) {
      this.bam = p5.Vector.random2D(); // movement will be a bit erractic
      this.bam.mult(0.85);
      this.speed.add(this.bam);
      this.speed.normalize();
      this.speed.mult(1.5);
      this.loc = this.loc.add(this.speed);
    }
  } // End of update()
} // End of class

function Walker() {
  // Daniel Shiffman
  // http://natureofcode.com
  this.loc = createVector(width/2, height/2);
  this.prevLoc = createVector(this.loc.x, this.loc.y);
  this.diam = 20;
  this.stepSize = 10;
  this.speed = random(5, 10);
  this.c = color(random(360), 100, 50, 30);

  this.render = function() {
    pg1.strokeWeight(this.diam);
    pg1.stroke(this.c);
    pg1.line(this.prevX, this.prevY, this.x, this.y);
  }

  // Randomly move according to floating point values
  this.step = function() {
    var stepx = random(-this.stepSize, this.stepSize);
    var stepy = random(-this.stepSize, this.stepSize);
    this.prevLoc.set(this.loc.x, this.loc.y);
    this.loc.add(stepx, stepy);
    // this.x = constrain(this.x, 0, width-1);
    // this.y = constrain(this.y, 0, height-1);
    // this.diam -= random(0.01, 0.05);
    // this.diam = constrain(this.diam, 0.5, 10);
  }
  this.bounce = function() {
    this.loc = this.loc.add(this.speed);
  }
}
