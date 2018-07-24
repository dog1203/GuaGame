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
            game.fps = Number(event.target.value) + 5
            log(game.fps)
        })
    }
}


var __main = function() {
    var images = {
        ball: 'img/ball.png',
        paddle: 'img/paddle.png',
        block: 'img/block.png',
    }


    var defaultFPS = 30
    var game = GuaGame(defaultFPS, images, function(g) {
        var scene = SceneTitle(g)
        g.runWithScene(scene)
    })

    enableDebugMode(true, game)
}

__main()
