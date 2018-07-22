

var __main = function() {
    var enableDebugMode = function(enable) {
        if(!enable) {
            return
        } else {
            window.addEventListener('keydown', function(event) {
                var k = event.key
                if(k == 'p') {
                    paused = !paused
                } else if('1234567'.includes(k)) {
                    blocks = loadLevels(Number(k), game)
                    log(blocks)
                }
            })

            document.querySelector("#id-input-speed").addEventListener('input', function(event) {
                // log(event.target)
                game.fps = Number(event.target.value)
                log(game.fps)
            })
        }
    }



    var images = {
        ball: 'ball.png',
        paddle: 'paddle.png',
        block: 'block.png',
    }
    var paused = false

    var score = 0
    var defaultFPS = 30
    var game = GuaGame(defaultFPS, images, function(g) {
        var paddle = Paddle(game)
        var ball = Ball(game)
        var blocks = loadLevels(3, game)





        game.registerAction('a', function() {
            paddle.moveLeft()
        })

        game.registerAction('d', function() {
            paddle.moveRight()
        })

        game.registerAction('f', function() {
            ball.fire()
        })



        game.update = function() {
            if(paused) {
                return
            }
            ball.move()
            if(paddle.collide(ball)) {
                ball.speedY *= -1
            }
            for (var i = 0; i < blocks.length; i++) {
                var block = blocks[i]
                if(block.collide(ball) && block.alive) {
                    block.kill()

                    // update the score
                    score += 100

                    ball.rebound()
                }
            }

        }

        game.draw = function() {
            // 绘制背景
            game.context.fillStyle = '#554'
            game.context.fillRect(0, 0, 400, 300)

            // draw
            game.drawImage(paddle)
            game.drawImage(ball)
            for (var i = 0; i < blocks.length; i++) {
                var block = blocks[i]
                if(block.alive) {
                    game.drawImage(block)
                }
            }

            // draw labels - score
            game.context.fillText('分数： ' + score, 10, 290)

        }
        var enableDrag = false
        game.canvas.addEventListener('mousedown', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            if(ball.inBall(x, y)) {
                enableDrag = true
            }
        })

        game.canvas.addEventListener('mousemove', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            if(enableDrag) {
                ball.x = x
                ball.y = y
            }
        })

        game.canvas.addEventListener('mouseup', function(event) {
            var x = event.offsetX
            var y = event.offsetY
            enableDrag = false
        })
    })
    enableDebugMode(true)
}

__main()
