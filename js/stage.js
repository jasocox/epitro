function setupStage(canvas) {

    this.stage = new createjs.Stage(canvas);
    this.stage.x = window.innerWidth * 0.5;
    this.stage.y = window.innerHeight * 0.5;
    this.stage.canvas.width = window.innerWidth;
    this.stage.canvas.height = window.innerHeight;
    this.stage.enableMouseOver();
    this.stage.mouseMoveOutside = true;
    this.stage.update();

    // Enable Touch
    createjs.Touch.enable(this.stage);

    return this.stage;

}
