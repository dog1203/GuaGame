class GuaParticleSystem {
    constructor(game) {
        this.game = game
        this.setup()
    }
    setup() {
        this.duration = 50
        this.x = 150
        this.y = 200
        this.numberOfParticles = 20
        this.particles = []
    }
    static new(game) {
        return new this(game)
    }
    update() {
        this.duration -= 1
        if(this.duration < 0) {
            // log(this.scene.elements)
            this.scene.removeElements(this)
        }
        //create the sparkle
        if(this.particles.length < this.numberOfParticles) {
            var p = GuaParticle.new(this.game)

            var s = 2
            var vx = 0.4 * randomBetween(-s, s)
            var vy = 0.3 * randomBetween(-s, s)
            p.init(this.x, this.y, vx, vy)
            this.particles.push(p)
        }
        // update the sparkle
        for (var i = 0; i < this.particles.length; i++) {
            var p = this.particles[i]
            p.update()
        }
        // delete the dead sparkle
        this.particles = this.particles.filter(p => p.life > 0)
    }
    draw() {
        for (var i = 0; i < this.particles.length; i++) {
            var p = this.particles[i]
            p.draw()
        }
    }

}
