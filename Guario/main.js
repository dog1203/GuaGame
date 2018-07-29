var enableDebugMode = function(enable, game) {
    if(!enable) {
        return
    } else {
        window.addEventListener('keydown', function(event) {
            var k = event.key
            if(k == 'p') {
                window.paused = !window.paused
            } else if('1234567'.includes(k)) {
                // blocks = loadLevels(Number(k), game)
                log(blocks)
            }
        })
        // 控制速度
        document.querySelector("#id-input-speed").addEventListener('input', function(event) {
            // log(event.target)
            game.fps = Number(event.target.value) + 5
            log(game.fps)
        })
    }
}


var __main = function() {
    var images = {
        // birds
        b0: 'img/b1.png',
        b1: 'img/b2.png',
        b2: 'img/b3.png',
        b3: 'img/b4.png',
        // background
        bg: 'img/bg.png',
        ground: 'img/ground.png',
        // pipes
        pipe: 'img/pipe.png',
    }


    var defaultFPS = 30
    var game = GuaGame.instance(defaultFPS, images, function(g) {
        var scene = Scene.new(g)
        // var scene = SceneTitle.new(g)
        g.runWithScene(scene)
    })

    enableDebugMode(true, game)
}

__main()
