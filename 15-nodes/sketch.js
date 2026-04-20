// Connected Nodes OOP Demo

let nodes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  // draw lines first
  for(let node of nodes) {
    node.uptade();
    node.connectTo(nodes);
  } 
  for (let node of nodes) {
    node.display();
  }
}


class MovingPoint {
  constructor(x, y) {
    this.y = y;
    this.x = x;
    this.xTime = random(1000);
    this.yTime = random(1000);
    this.deltaTime = 0.05;
    this.radius = 25;
    this.speed = 5;
    this.color = color(random(255), random(255), random(255));
    this.reach = 100;
    this.minRadius = 15;
    this.maxRadius = 50;
  }

  display() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.radius*2);
  }

  uptade() {
    this.move();
    this.wrapAroundTheScreen();
    this.adjustSizeByMouse();
  }

  adjustSizeByMouse() {
    let mouseDistance = dist(this.x, this.y, mouseX, mouseY);
    let theSize = map(mouseDistance, 0, this.reach, this.maxRadius, this.minRadius);
    if (mouseDistance < this.reach) {
      this.radius = theSize;
    }
    else {
      this.radius = this.minRadius;
    }
  }

  connectTo(nodesArray) {
    for (let otherNode of nodesArray) {
      if (this !== otherNode) {
        let distanceAway = dist(this.x, this.y, otherNode.x, otherNode.y);
        if (distanceAway < 100) {
          stroke(this.color);
          line(this.x, this.y, otherNode.x, otherNode.y);
        }
      }
    }
  }

  wrapAroundTheScreen() {
    if (this.x < 0) {
      this.x += width;
    }
    if (this.x > width) {
      this.x -= width;
    }
    if (this.y < 0) {
      this.y += height;
    }
    if (this.y > height) {
      this.y -= height;
    }
  }

  move() {
    let dx = noise(this.xTime);
    let dy = noise(this.yTime);
  
    // scale from 0 to 1 
    dx = map(dx, 0, 1, -this.speed, this.speed);
    dy = map(dy, 0, 1, -this.speed, this.speed);
  
    // move point
    this.x += dx;
    this.y += dy;
  
    // move on the time axis
    this.xTime += this.deltaTime;
    this.yTime += this.deltaTime;
  }
}


function mousePressed() {
  let somePoint = new MovingPoint(mouseX, mouseY);
  nodes.push(somePoint);
}