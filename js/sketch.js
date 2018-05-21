
var mySounds = [];

function preload() {
  for (var i = 0; i < 15; i++) {
    mySounds[i] = loadSound('assets/chimes/' + i + '.wav');

  }
}


function setup() {
  var canv = createCanvas(windowWidth, windowHeight);
  // make div#can the parent of the created canvas
  canv.parent("can");

  pixelDensity(1); // Set 1 because it's too slow on firefox
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();


}

function draw() {
  background(200, 255, 255);
}
