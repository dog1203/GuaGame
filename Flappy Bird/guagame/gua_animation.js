class GuaAnimation {
    constructor(game) {
        this.game = game

        this.animation = {
            idle: [],
            run: [],
        }
        this.frame = []
        for (var i = 0; i < 4; i++) {
            var name = `b${i}`
            var t = game.textureByName(name)
            this.animation['run'].push(t)
        }

        for (var i = 0; i < 4; i++) {
            var name = `b${i}`
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

        // 重力和加速度
        this.gy = 10
        this.vy = 0

        this.rotation = 0
    }
    static new(game) {
        return new this(game)
    }
    frames() {
        return this.animation[this.animationName]
    }
    jump() {
        this.vy = -10
        this.rotation = -45
    }
    update() {
        // 更新受力
        this.y += this.vy
        this.vy += this.gy * 0.2

        var h = 520
        if(this.y > h) {
            this.y = h
        }

        // 更新角度
        if(this.rotation < 90) {
            this.rotation += 5
        }

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
        context.save()
        var w2 = this.w / 2
        var h2 = this.h / 2
        var x = this.x + this.w / 2
        context.translate(this.x + w2, this.y + h2)
        if(this.flipX) {
            context.scale(-1, 1)
        }
        context.rotate(this.rotation * Math.PI / 180)
        context.translate(-w2, -h2)
        context.drawImage(this.texture, 0, 0)
        context.restore()


    }
    move(x, keyStatus) {
        this.x += x
        // log('x, y, w, h', this.x ,this.y, this.w, this.h)
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
