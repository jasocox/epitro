function main() {

  // Setup
  var stage = setupStage(document.getElementById("canvas"));

  // Keyboard Test
  document.onkeydown = keyPressed;

  // Extension Test
  var extend_test = new ExtendedContainer();
  extend_test.output();

  setInterval(function() {
    stage.addChild(generateDot());
  }, 1);

  createjs.Ticker.framerate = 60;
  createjs.Ticker.addEventListener("tick", function() {
    stage.update();
  });

}

var SPACE_KEY = 32;

function keyPressed(event) {
  //Keycodes found at http://keycode.info
  if (event.keyCode === SPACE_KEY) {
    console.log("Pressed: space key");
  }
}
