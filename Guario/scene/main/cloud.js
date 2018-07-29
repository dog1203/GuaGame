class Cloud extends GuaImage {
    constructor(game) {
        super(game, 'cloud')
        this.setup()
    }
    setup() {
        // log(this)
        this.x = randomBetween(0, 350)
        this.y = -randomBetween(0, 200)
        this.speed = randomBetween(1, 2)
    }
    debug() {
        this.speed = config.cloud_speed
    }
    update() {
        this.y += this.speed
        if(this.y > 600) {
            this.setup()
        }
    }
}
