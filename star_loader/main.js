const CENTER_X = window.innerWidth / 2;
const CENTER_Y = window.innerHeight / 2;
const RADIUS = 200;

const VERTEX_COUNT = 5;
const VERTEX_ANGLE = (2 * Math.PI) / VERTEX_COUNT;

let startAngle = 0;
const ROTATION_SPEED = 0.02;

const PART_RATIO = 2.61;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  fill(255, 255, 0);
  stroke(255);
}

function draw() {
  background(56);

  for (let i = 0; i < VERTEX_COUNT; i++) {
    const curVertex = getVertex(i);
    const nextVertex = getVertex(i + 2);
    const prevVertex = getVertex(i - 2);

    const nextDelta = p5.Vector.sub(nextVertex, curVertex).div(PART_RATIO);
    const end1 = p5.Vector.add(curVertex, nextDelta);

    const prevDelta = p5.Vector.sub(prevVertex, curVertex).div(PART_RATIO);
    const end2 = p5.Vector.add(curVertex, prevDelta);

    line(curVertex.x, curVertex.y, end1.x, end1.y);
    line(curVertex.x, curVertex.y, end2.x, end2.y);
  }

  startAngle += ROTATION_SPEED;
}

function getVertex(i) {
  const angle = startAngle + i * VERTEX_ANGLE;
  const x = CENTER_X + RADIUS * Math.cos(angle);
  const y = CENTER_Y + RADIUS * Math.sin(angle);

  return createVector(x, y);
}
