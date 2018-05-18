

function preload() {
}

function setup() {
  var canv = createCanvas(windowWidth, windowHeight, WEBGL);
  canv.parent("can");
  pixelDensity(1);
}

function draw() {


}

function Pyramid(x, y, z, s) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.sz = s;
  this.render = function() {
    push();
    translate(this.x, this.y, this.z)
    line(0, 0,  0, s/2)
    pop();
  }
}
