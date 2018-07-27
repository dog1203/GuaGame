const randomBetween = function(start, end) {
    var n = Math.random() * (end - start + 1)
    return Math.floor(n + start)
}


class Enemy extends GuaImage {
    constructor(game) {
        var type = randomBetween(0, 4)
        var name = 'enemy' + type
        super(game, name)
        this.setup()
    }
    setup() {
        log(this)
        this.x = randomBetween(0, 350)
        this.y = -randomBetween(0, 200)
        this.speed = randomBetween(2, 5)
    }
    debug() {
        this.speed = config.enemy_speed
    }
    update() {
        this.y += this.speed
        if(this.y > 600) {
            this.setup()
        }
    }
}
