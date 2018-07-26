class GuaParticle extends GuaImage {
    constructor(game) {
        super(game, 'fire')
        this.setup()
    }
    setup() {
        this.life = 20
    }
    init(x, y, vx, vy) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
    }

    update() {
        var factor = 0.02
        this.x += this.vx
        this.y += this.vy
        this.vx += factor * this.vx
        this.vy += factor * this.vy
        this.life -= 1
    }
}
