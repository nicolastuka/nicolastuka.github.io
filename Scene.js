class Scene {
    
    #background = new Image();
    #player = new Player(125, 400, "/assets/ship.png");
    #rocks = [];
    #gameover = new GameOver();
    #live = false;

    constructor() {
        this.#background = new Image();
        this.#background.src = "/assets/background.jpg";
        this.n = 0;
        while (this.n < 3) {
            this.#rocks.push(new Rock(Math.floor(Math.random() * 200), -Math.floor(Math.random() * 50), "/assets/rock.png"));
            this.n++;
        }
    }

    #ProcessCollisions() {
        let status = false;
        this.#rocks.map( r => {
            if (r.position.y >= this.#player.position.y && r.position.y <= this.#player.position.y + 5) {
                if (r.position.x <= this.#player.position.x + 50 && r.position.x + 50 > this.#player.position.x)
                    status = true;
            }
        });
        return status;
    }

    Update(keyboard) {
        ctx.clearRect(0, 0, 250, 500);
        ctx.drawImage(this.#background, 0, 0, 250, 500);
        if (!this.#live) {
            this.#player.Update(keyboard);
            this.#rocks.map( r => r.Update());
            if (this.#ProcessCollisions()) {
                this.#live = true;
            }
        } else {
            this.#rocks.length = 0;
            this.#gameover.Draw();
        }
    }

}