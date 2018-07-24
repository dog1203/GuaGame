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


// var Scene = function(game) {
//     var s = {
//         game: game,
//     }
//
//     var paddle = Paddle(game)
//     var ball = Ball(game)
//     var blocks = loadLevels(3, game)
//
//
//     var enableDrag = false
//
//     game.registerAction('a', function() {
//         paddle.moveLeft()
//     })
//
//     game.registerAction('d', function() {
//         paddle.moveRight()
//     })
//
//     game.registerAction('f', function() {
//         ball.fire()
//     })
//
//
//     game.canvas.addEventListener('mousedown', function(event) {
//         var x = event.offsetX
//         var y = event.offsetY
//         if(ball.inBall(x, y)) {
//             enableDrag = true
//         }
//     })
//
//     game.canvas.addEventListener('mousemove', function(event) {
//         var x = event.offsetX
//         var y = event.offsetY
//         if(enableDrag) {
//             ball.x = x
//             ball.y = y
//         }
//     })
//
//     game.canvas.addEventListener('mouseup', function(event) {
//         var x = event.offsetX
//         var y = event.offsetY
//         enableDrag = false
//     })
//
//     s.update = function() {
//         if(window.paused) {
//             return
//         }
//         ball.move()
//
//         // 判断挡板和球相撞
//         if(paddle.collide(ball)) {
//             ball.speedY *= -1
//         }
//
//         // 判断是否结束游戏
//         if(ball.y > paddle.y) {
//             var s = SceneEnd.new(game)
//             game.replaceScene(s)
//         }
//
//         for (var i = 0; i < blocks.length; i++) {
//             var block = blocks[i]
//             if(block.collide(ball) && block.alive) {
//                 block.kill()
//
//                 // update the score
//                 game.score += 100
//
//                 ball.rebound()
//             }
//         }
//     }
//
//     s.draw = function() {
//         // 绘制背景
//         game.context.fillStyle = '#554'
//         game.context.fillRect(0, 0, 400, 300)
//
//         // draw
//         game.drawImage(paddle)
//         game.drawImage(ball)
//         for (var i = 0; i < blocks.length; i++) {
//             var block = blocks[i]
//             if(block.alive) {
//                 game.drawImage(block)
//             }
//         }
//
//         // draw labels - score
//         game.context.fillStyle = 'white'
//         game.context.fillText('分数： ' + game.score, 10, 290)
//     }
//
//     return s
// }
