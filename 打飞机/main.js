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
        bullet: 'img/bullet.png',
        cloud: 'img/cloud.png',
        player: 'img/player.png',
        sky: 'img/bg.png',
        enemy0: 'img/enemy0.png',
        enemy1: 'img/enemy1.png',
        enemy2: 'img/enemy2.png',
        enemy3: 'img/enemy3.png',
        enemy4: 'img/enemy4.png',
    }


    var defaultFPS = 30
    var game = GuaGame.instance(defaultFPS, images, function(g) {
        var scene = Scene.new(g)
        g.runWithScene(scene)
    })

    enableDebugMode(true, game)
}

__main()
