const CENTER_X = window.innerWidth / 2;
const CENTER_Y = window.innerHeight / 2;
const RADIUS = 200;

const DETAIL_RADIUS = 20;
const DETAIL_COUNT = 6;
let detailAngleDelta = (2 * Math.PI) / 20;
const DETAIL_ANGLE_DELTA_SPEED = 0.01;

let startAngle = 0;
const DETAIL_SPEED = 0.02;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  fill(255, 255, 0);
}

function draw() {
  background(56);

  for (let i = 0; i < DETAIL_COUNT; i++) {
    const angle = startAngle + i * detailAngleDelta;
    const x = CENTER_X + RADIUS * Math.cos(angle);
    const y = CENTER_Y + RADIUS * Math.sin(angle);

    circle(x, y, DETAIL_RADIUS);
  }

  startAngle += DETAIL_SPEED;
  detailAngleDelta += DETAIL_ANGLE_DELTA_SPEED;
}
