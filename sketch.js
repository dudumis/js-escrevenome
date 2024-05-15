function setup() {
    createCanvas(400, 400);
    background("#FFB6C1")
  }
  
  function draw() {
    stroke("#FF0084")
    fill("#FA8FB1")
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 10, 10);
    }
  }
  