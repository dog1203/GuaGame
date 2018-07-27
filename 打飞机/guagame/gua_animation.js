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

        this.x = this.texture.x
        this.y = this.texture.y
        this.w = this.texture.width
        this.h = this.texture.height

        this.frameIndex = 0
        this.frameCount = 1

        this.flipX = false
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
        var context = this.game.context
        if(this.flipX) {
            context.save()
            var x = this.x + this.w / 2
            context.translate(x, 0)
            context.scale(-1, 1)
            context.translate(-x, 0)
            context.drawImage(this.texture, this.x, this.y)
            context.restore()
        } else {
            this.game.drawImage(this, this.x, this.y)
        }

    }
    move(x, keyStatus) {
        this.x += x
        log('x, y, w, h', this.x ,this.y, this.w, this.h)
        this.flipX = (x < 0)

        var animationNames = {
            down: 'run',
            up: 'idle',
        }
        var name = animationNames[keyStatus]
        this.changeAnimation(name)


    }
    changeAnimation(name) {
        this.animationName = name
    }
}
