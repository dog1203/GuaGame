var Scene = function(game) {
    var s = {
        game: game,
    }

    var paddle = Paddle(game)
    var ball = Ball(game)
    var blocks = loadLevels(3, game)

    var score = 0

    var enableDrag = false





    game.registerAction('a', function() {
        paddle.moveLeft()
    })

    game.registerAction('d', function() {
        paddle.moveRight()
    })

    game.registerAction('f', function() {
        ball.fire()
    })

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

    s.update = function() {
        if(window.paused) {
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

    s.draw = function() {
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
        game.context.fillStyle = 'white'
        game.context.fillText('分数： ' + score, 10, 290)
    }

    return s
}
