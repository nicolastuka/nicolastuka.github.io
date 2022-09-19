class Rock extends Actor {

    #velocity = Math.floor(Math.random() * 5)

    constructor(x, y, tPath) {
        super(x, y, tPath);
        this.img = new Image();
        this.img.src = this.texturePath;
        if (this.#velocity == 0) this.#velocity++;
    }

    #Restart() {
        this.position.y = Math.floor(Math.random() * 5);
        this.position.x = Math.floor(Math.random() * 200);
        this.#velocity = Math.floor(Math.random() * 5);
        if (this.#velocity == 0) this.#velocity++;
    }

    #Draw() {
        ctx.drawImage(this.img, this.position.x, this.position.y)
    }

    Update() {
        this.position.y += this.#velocity;
        this.#Draw();
        if (this.position.y > 550) {
            this.#Restart();
        }
    }
}