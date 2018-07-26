


class Player extends GuaImage {
    constructor(game) {
        super(game, 'player')
        this.setup()
    }
    setup() {
        this.speed = 10
        this.cooldown = config.player_speed
    }
    debug() {
        this.speed = config.player_speed
        this.cooldown = config.player_speed
    }
    update() {
        // log(this.speed)

        if(this.cooldown > 0) {
            this.cooldown -= 1
        }
    }
    moveLeft() {
        this.x -= this.speed
    }
    moveRight() {
        this.x += this.speed
    }
    moveUp() {
        this.y -= this.speed
    }
    moveDown() {
        this.y += this.speed
    }
    fire() {
        if(this.cooldown == 0) {
            var x = this.x + this.w / 2
            var y = this.y
            var b = Bullet.new(this.game)
            b.x = x
            b.y = y
            this.scene.addElements(b)
            this.cooldown = config.fire_cooldown
        }

    }


}
