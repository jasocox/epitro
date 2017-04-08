function setupStage(canvas) {

    var stage = new createjs.Stage(canvas);

    stage.x = window.innerWidth * 0.5;
    stage.y = window.innerHeight * 0.5;
    stage.canvas.width = window.innerWidth;
    stage.canvas.height = window.innerHeight;
    stage.enableMouseOver();
    stage.mouseMoveOutside = true;
    stage.update();

    // Enable Touch
    createjs.Touch.enable(stage);

    return stage;

}
