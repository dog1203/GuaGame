class Scene extends GuaScene {
    constructor(game) {
        super(game)

        this.paddle = Paddle(this.game)
        log('paddle is', this.paddle)
        this.ball = Ball(this.game)
        this.blocks = loadLevels(3, this.game)


        this.init()
        this.enableDrag = false

        var self = this
        this.game.registerAction('a', function() {
            log('paddle is :', self.paddle)
            self.paddle.moveLeft()
        })

        this.game.registerAction('d', function() {
            log('registering d')
            self.paddle.moveRight()
        })

        this.game.registerAction('f', function() {
            log('registering f')
            log(this.ball)
            self.ball.fire()
        })

    }

    init() {
        var self = this
        self.game.canvas.addEventListener('mousedown', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            if(self.ball.inBall(x, y)) {
                self.enableDrag = true
            }
        })

        self.game.canvas.addEventListener('mousemove', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            if(self.enableDrag) {
                self.ball.x = x
                self.ball.y = y
            }
        })

        self.game.canvas.addEventListener('mouseup', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            self.enableDrag = false
        })
    }

    draw() {
        // 绘制背景
        this.game.context.fillStyle = '#554'
        this.game.context.fillRect(0, 0, 400, 300)

        // draw
        this.game.drawImage(this.paddle)
        this.game.drawImage(this.ball)
        for (var i = 0; i < this.blocks.length; i++) {
            var block = this.blocks[i]
            if(block.alive) {
                this.game.drawImage(block)
            }
    }
}

    update() {
        if(window.paused) {
            return
        }
        this.ball.move()

        // 判断挡板和球相撞
        if(this.paddle.collide(this.ball)) {
            this.ball.speedY *= -1
        }

        // 判断是否结束游戏
        if(this.ball.y > this.paddle.y) {
            var s = SceneEnd.new(this.game)
            this.game.replaceScene(s)
        }

        for (var i = 0; i < this.blocks.length; i++) {
            var block = this.blocks[i]
            if(block.collide(this.ball) && block.alive) {
                block.kill()

                // update the score
                this.game.score += 100

                this.ball.rebound()
            }
        }
    }
}
