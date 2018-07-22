var enableDebugMode = function(enable) {
    if(!enable) {
        return
    } else {
        window.addEventListener('keydown', function(event) {
            var k = event.key
            if(k == 'p') {
                paused = !paused
            } else if('1234567'.includes(k)) {
                blocks = loadLevels(Number(k))
            }
        })

        document.querySelector("#id-input-speed").addEventListener('input', function(event) {
            // log(event.target)
            game.fps = Number(event.target.value)
            log(game.fps)
        })
    }
}



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
                    blocks = loadLevels(Number(k))
                }
            })

            document.querySelector("#id-input-speed").addEventListener('input', function(event) {
                // log(event.target)
                game.fps = Number(event.target.value)
                log(game.fps)
            })
        }
    }


    var score = 0
    var defaultFPS = 30
    var game = GuaGame(defaultFPS)
    var paddle = Paddle()
    var ball = Ball()
    var blocks = loadLevels(3)

    var paused = false
    enableDebugMode(true)



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
}

__main()
