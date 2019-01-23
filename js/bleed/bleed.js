var canvas
var mov;
var img;
var myWidth = 0;
var myHeight = 0;

function setup() {
  console.log("loaded");
  canvas = createCanvas(1140,720*.9);
  canvas.parent('bleed');
  // canvas.resize(canvas.parent.width, canvas.parent.height);
  mov = createVideo('/js/bleed/Bleed.mp4');
  mov.hide(); // by default video shows up in separate dom
  // element. hide it and draw it to the canvas
  // instead
  // mov = loadImage("/js/bleed/pic.png")

  img = loadImage("/js/bleed/pic.png");


}

function draw() {
  var t = 0;
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    t = mov.duration()/2;
    if (isNaN(t)) t = 8;
  }
  else {
    t = constrain(map(mouseY, 0, height, 0, mov.duration()/2), 0, mov.duration()/2);
    if (isNaN(t)) t = 0;
  }
  // mov.time(8);
  var myDiv = select('#bleed');
  if (myDiv != null) {
    var myWidth = myDiv.width;
    var myHeight = myDiv.height;
    // console.log('width: ' + myWidth, myHeight);


  }
  //image(img, 0, 0);
  image(mov, 0, 0, myWidth,myHeight);
  console.log(t);
  mov.time(t);
}

function mousePressed() {
  // mov.loop();
  mov.play();
  // mov.time(8);
  // image(mov, 0, 0);
}
