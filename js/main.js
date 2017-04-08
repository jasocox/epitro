var SPACE_KEY = 32;

function main() {

  // Setup
  var stage = setupStage(document.getElementById("canvas"));
  document.onkeydown = function(event) {
    //Keycodes found at http://keycode.info
    if (event.keyCode === SPACE_KEY) {
      generateParams();
      stage.removeAllChildren();
      stage.update();
    }
  };

  setInterval(function() {
    for (var i=0; i<100; i++) {
      stage.addChild(generateDot());
    }
  }, 1);

  createjs.Ticker.framerate = 60;
  createjs.Ticker.addEventListener("tick", function() {
    stage.update();
  });

}
