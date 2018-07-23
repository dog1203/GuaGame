var enableDebugMode = function(enable, game) {
    if(!enable) {
        return
    } else {
        window.addEventListener('keydown', function(event) {
            var k = event.key
            if(k == 'p') {
                window.paused = !window.paused
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



var __main = function() {




    var images = {
        ball: 'ball.png',
        paddle: 'paddle.png',
        block: 'block.png',
    }


    var defaultFPS = 30
    var game = GuaGame(defaultFPS, images, function(g) {
        var scene = Scene(game)
        game.update = function() {
            scene.update()

        }

        game.draw = function() {
            scene.draw()

        }


    })
    enableDebugMode(true, game)
}

__main()
