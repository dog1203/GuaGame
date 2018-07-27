class GuaAnimation {
    constructor(game) {
        this.game = game

        this.animation = {
            idle: [],
            run: [],
        }
        this.frame = []
        for (var i = 0; i < 10; i++) {
            var name = `run${i}`
            var t = game.textureByName(name)
            this.animation['run'].push(t)
        }

        for (var i = 0; i < 10; i++) {
            var name = `idle${i}`
            var t = game.textureByName(name)
            this.animation['idle'].push(t)
        }

        this.animationName = 'idle'

        this.texture = this.frames()[0]
        this.frameIndex = 0
        this.frameCount = 1
    }
    static new(game) {
        return new this(game)
    }
    frames() {
        return this.animation[this.animationName]
    }
    update() {
        // log(this.frame)
        this.frameCount -= 1
        if(this.frameCount == 0) {
            this.frameCount = 1
            this.frameIndex = (this.frameIndex + 1) % this.frames().length
            this.texture = this.frames()[this.frameIndex]
        }
    }
    draw() {
        this.game.drawImage(this, this.x, this.y)
    }
    move(x, keyStatus) {
        if(keyStatus == 'down') {
            this.x += x
            this.changeAnimation('run')
        } else if(keyStatus == 'up') {
            this.changeAnimation('idle')
        }


    }
    changeAnimation(name) {
        this.animationName = name
    }
}
