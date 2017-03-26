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

function keyPressed(event) {
  //Keycodes found at http://keycode.info
  if (event.keyCode === 32) {
    console.log("testing");
  }
}
