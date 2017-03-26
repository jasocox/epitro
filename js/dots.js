var deltas = {};
var maxRadius = (window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight) / 2;

generateDeltas();

function generateDot() {
  var dot = new createjs.Shape();
  var point = generatePoint();

  dot.graphics.beginFill("DeepSkyBlue").drawCircle(point.x, point.y, 1);
  dot.originX = dot.x;

  return dot;
}

function generateDeltas() {
  deltas = {
    dR: Math.ceil(Math.random() * 3),
    dT: Math.random()
  };
}

var currentPoint = {
  r: 0,
  rD: 1,
  t: 0,
  x: 0,
  y: 0
};

function generatePoint() {
  if (((currentPoint.r + currentPoint.rD * deltas.dR) > maxRadius) ||
      ((currentPoint.r + currentPoint.rD * deltas.dR) < 0)) {
    currentPoint.rD = currentPoint.rD * -1;
  }
  currentPoint.r = currentPoint.r + currentPoint.rD * deltas.dR;

  currentPoint.x = Math.cos(currentPoint.t) * currentPoint.r;
  currentPoint.y = Math.sin(currentPoint.t) * currentPoint.r;

  currentPoint.t = currentPoint.t + deltas.dT;

  return currentPoint;
}
