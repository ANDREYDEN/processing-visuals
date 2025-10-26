const CENTER_X = window.innerWidth / 2;
const CENTER_Y = window.innerHeight / 2;
const CIRCLE_RADIUS = 200;
const STAR_MID_POINT_RADIUS = CIRCLE_RADIUS * 0.4;

const VERTEX_COUNT = 5;
const VERTEX_ANGLE = (2 * Math.PI) / VERTEX_COUNT;

let startAngle = 0;
const ROTATION_SPEED = 0.01;

const MORPH_SPEED = 1;
let morphInProgress = false;
let morphDirection = -1;
let midPointRadius = STAR_MID_POINT_RADIUS;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  fill(255, 255, 0);
  stroke(255, 255, 0);
}

function draw() {
  background(56);

  drawShape();
  drawSunBeams();

  startAngle += ROTATION_SPEED;
  performMorph();
}

function keyPressed() {
  if (keyCode === ENTER) {
    morphInProgress = true;
    morphDirection *= -1;
  }
}

function drawShape() {
  beginShape();
  for (let i = 0; i < VERTEX_COUNT; i++) {
    const curVertex = getVertex(i);
    const nextMidPoint = getPointOnCircle(midPointRadius, getAngle(i + 0.5));

    vertex(curVertex.x, curVertex.y);
    vertex(nextMidPoint.x, nextMidPoint.y);
  }
  endShape();
}

function drawSunBeams() {
  if (midPointRadius < CIRCLE_RADIUS) return;

  strokeWeight(4);
  for (let i = 0; i < VERTEX_COUNT * 2; i++) {
    const angle = getAngle(i / 2);
    const radiusStart = CIRCLE_RADIUS * 1.1;
    const radiusEnd = CIRCLE_RADIUS * 1.5;
    const innerPoint = getPointOnCircle(radiusStart, angle);
    const outerPoint = getPointOnCircle(radiusEnd, angle);

    line(innerPoint.x, innerPoint.y, outerPoint.x, outerPoint.y);
  }
  strokeWeight(1);
}

function performMorph() {
  if (!morphInProgress) return;

  midPointRadius += morphDirection * MORPH_SPEED;
  if (
    midPointRadius >= CIRCLE_RADIUS ||
    midPointRadius <= STAR_MID_POINT_RADIUS
  ) {
    morphInProgress = false;
  }
}

function getVertex(i) {
  const angle = getAngle(i);
  return getPointOnCircle(CIRCLE_RADIUS, angle);
}

function getPointOnCircle(radius, angle) {
  const x = CENTER_X + radius * Math.cos(angle);
  const y = CENTER_Y + radius * Math.sin(angle);
  return createVector(x, y);
}

function getAngle(i) {
  return startAngle + i * VERTEX_ANGLE;
}
