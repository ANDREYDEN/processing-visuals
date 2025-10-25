const CENTER_X = window.innerWidth / 2;
const CENTER_Y = window.innerHeight / 2;
const RADIUS = 200;

const VERTEX_COUNT = 5;
const VERTEX_ANGLE = (2 * Math.PI) / VERTEX_COUNT;

let startAngle = 0;
const ROTATION_SPEED = 0.02;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  fill(255, 255, 0);
  stroke(255);
}

function draw() {
  background(56);

  for (let i = 0; i < VERTEX_COUNT; i++) {
    const curVertex = getVertex(i);
    const nextVertex = getVertex(i + 1);

    line(curVertex.x, curVertex.y, nextVertex.x, nextVertex.y);
  }

  startAngle += ROTATION_SPEED;
}

function getVertex(i) {
  const angle = startAngle + i * VERTEX_ANGLE;
  const x = CENTER_X + RADIUS * Math.cos(angle);
  const y = CENTER_Y + RADIUS * Math.sin(angle);

  return { x, y };
}
