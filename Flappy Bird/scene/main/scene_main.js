class Pipes {
    constructor(game) {
        this.game = game
        this.pipes = []
        this.pipeSpace = config.pipe_space.value
        this.pipeInterval = 200
        this.numOfPipes = 3
        for (var i = 0; i < this.numOfPipes; i++) {
            var p1 = GuaImage.new(game, 'pipe')
            p1.flipY = false
            p1.x = 500 + i * this.pipeInterval

            var p2 = GuaImage.new(game, 'pipe')
            p2.flipY = true
            p2.x = p1.x
            this.resetPipesPosition(p1, p2)
            this.pipes.push(p1)
            this.pipes.push(p2)
        }
    }
    static new(game) {
        return new this(game)
    }
    resetPipesPosition(p1, p2) {
        p1.y = randomBetween(-200, 0)
        p2.y = p1.y + p1.h + this.pipeSpace
    }
    update() {
        // log('this pipes', this.pipes)
        for (var i = 0; i < this.pipes.length; i++) {
            var p = this.pipes[i]
            p.x -= 5
            if(p.x < -100) {
                p.x += this.pipeInterval * 3
            }
        }
    }
    debug() {
        this.pipeInterval = config.pipe_interval.value
        this.pipeSpace = config.pipe_space.value
    }
    draw() {
        var context = this.game.context
        for (var i = 0; i < this.pipes.length; i++) {
            var p = this.pipes[i]
            context.save()
            var w2 = p.w / 2
            var h2 = p.h / 2
            var x = p.x + p.w / 2
            context.translate(p.x + w2, p.y + h2)
            var scaleX = p.flipX ? -1 : 1
            var scaleY = p.flipY ? -1 : 1
                context.scale(scaleX, scaleY)
            context.rotate(p.rotation * Math.PI / 180)
            context.translate(-w2, -h2)
            context.drawImage(p.texture, 0, 0)
            context.restore()
        }
    }
}

class Scene extends GuaScene {
    constructor(game) {
        super(game)

        var bg = GuaImage.new(game, 'bg')
        this.addElements(bg)

        var pipes = Pipes.new(game)
        this.addElements(pipes)

        this.grounds = []
        for (var i = 0; i < 30; i++) {
            var g = GuaImage.new(game, 'ground')
            g.x = i * 19
            g.y = 540
            this.addElements(g)
            this.grounds.push(g)
        }
        this.skipCount = 4
        var bird = GuaAnimation.new(game)
        bird.x = 100
        bird.y = 200
        this.bird = bird
        this.addElements(bird)
        this.setupInput()
    }
    setupInput() {
        var self = this
        var b = this.bird
        self.game.registerAction('a', function(keyStatus) {
            b.move(-5, keyStatus)
        })

        self.game.registerAction('d', function(keyStatus) {
            b.move(5, keyStatus)
        })
        self.game.registerAction('f', function(keyStatus) {
            b.jump()
        })
    }
    update() {
        super.update()
        // 循环移动的地面
        this.skipCount -= 1
        this.offset = -5
        if(this.skipCount == 0) {
            this.skipCount = 4
            this.offset = 15
        }
        for (var i = 0; i < 30; i++) {
            var g = this.grounds[i]
            g.x += this.offset
        }
    }

}
