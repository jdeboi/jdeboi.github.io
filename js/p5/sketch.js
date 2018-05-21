function setup() {
  var canv = createCanvas(windowWidth, windowHeight, WEBGL);
  // make div#can the parent of the created canvas
  canv.parent("can");
}

function draw() {
  background(0);
  fill(255);
  stroke(0);
  strokeWeight(1);


  var dirY = (mouseY / height - 0.5) *2;
  var dirX = (mouseX / width - 0.5) *2;
  directionalLight(250, 250, 250, dirX, -dirY, 0.25);
  ambientLight(100);
  // pointLight(255, 255, 255, 150, 0, -40);
  specularMaterial(250);
  translate(300, 150, -350);
  box(300);
  translate(-600, 0, 0);
  box(300);
}

function drawTriangles() {
  var tw = 50;
  var yUp = 0;
  for (var y = 0; y < height; y += tw) {
    yUp++;
    var up = 0;
    for (var x = 0; x < width; x += tw/2) {
      up++;
      if (up%2 == 0 || yUp %2 == 0) {
        triangle(x, y, x + tw/2, y - tw, x+tw, y);
      }
      // else {
      //   triangle(x - tw/2, y - tw, x + tw/2, y - tw, x+tw/2, y);
      // }
    }
  }

}

function drawHorizontalLines(lineSpacing) {
  for(var i = 0; i < height; i+= lineSpacing) {
    line(0, i, width, i);
  }
}

function drawName() {
  var textS = 200;
  textSize(textS);

  var txt = "Jdeboi";
  var textW = textWidth(txt);
  text(txt, (width-textW)/2, height/2 - textS/2);
  txt = "deBoisblanc";
  textW = textWidth(txt);
  text(txt, (width-textW)/2, height/2 + textS/2);
}
