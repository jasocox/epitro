var deltas = {};
var PI = 3.1415927;
var maxRadius = (window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight) / 2;

generateParams();

function generateDot() {
  var dot = new createjs.Shape();
  var point = generatePoint();

  dot.graphics.beginFill("DeepSkyBlue").drawCircle(point.x, point.y, 1);
  dot.originX = dot.x;

  return dot;
}

function generateParams() {
  deltas = {
    dT: PI / Math.random() * 25,
    dR: PI / Math.random(),
    a: Math.random(maxRadius / 12),
    b: Math.random(maxRadius / 12),
    c: Math.random(maxRadius / 12)
  };
}

var currentT = 0;
var currentR = 0;
var currentRD = 1;

function generatePoint() {
  if (((currentR + currentRD * deltas.dR) > maxRadius) ||
      ((currentR + currentRD * deltas.dR) < 0)) {
    currentRD = currentRD * -1;
  }
  currentR = currentR + currentRD * deltas.dR + 0.00001;

  var currentPoint = {
    x: (
      currentR *
      ((deltas.a + deltas.b) * Math.cos(currentT)) -
      (deltas.c * Math.cos(((deltas.a+deltas.b)/deltas.b)*currentT))
    ),
    y:  (
      currentR *
      ((deltas.a + deltas.b) * Math.sin(currentT)) -
      (deltas.c * Math.sin(((deltas.a+deltas.b)/deltas.b)*currentT))
    )
  };

  currentT += deltas.dT;

  return currentPoint;
}
