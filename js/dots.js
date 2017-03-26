function generateDot() {
  var dot = new createjs.Shape();
  var point = generatePoint();

  dot.graphics.beginFill("DeepSkyBlue").drawCircle(point.x, point.y, 4);
  dot.originX = dot.x;

  return dot;
}

function generatePoint() {
  var point = {
    x: Math.ceil(Math.random() * window.innerWidth) - (window.innerWidth / 2),
    y: Math.ceil(Math.random() * window.innerHeight) - (window.innerHeight / 2)
  };

  return point;
}
