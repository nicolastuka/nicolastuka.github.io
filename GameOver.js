class GameOver {

    constructor() {
        this.img = new Image();
        this.img.src = "/assets/gameover.png";
    }

    Draw() {
        ctx.drawImage(this.img, 0, 0);
    }
}