class Player extends Actor {

    constructor(x, y, tPath) {
        super(x, y, tPath);
        this.img = new Image();
        this.img.src = this.texturePath;
    }

    #Draw() {
        ctx.drawImage(this.img, this.position.x, this.position.y)
    }

    #Move(keyboard) {
        this.position.x += keyboard[0] * 2;
        this.position.y += keyboard[1] * 2;
    }

    Update(keyboard) {
        this.#Move(keyboard);
        this.#Draw();
    }
}