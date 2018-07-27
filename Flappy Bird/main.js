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
        fire: 'img/fire.png',
        // 行走动画
        // w0: 'img/walking/w0.png',
        // w1: 'img/walking/w1.png',
        // w2: 'img/walking/w2.png',
        // w3: 'img/walking/w3.png',
        // w4: 'img/walking/w4.png',
        // w5: 'img/walking/w5.png',
        // w6: 'img/walking/w6.png',
        // w7: 'img/walking/w7.png',
        // w8: 'img/walking/w8.png',
        // w9: 'img/walking/w9.png',
        // 多状态动画
        // idle
        idle0: 'img/idle/idle0.png',
        idle1: 'img/idle/idle1.png',
        idle2: 'img/idle/idle2.png',
        idle3: 'img/idle/idle3.png',
        idle4: 'img/idle/idle4.png',
        idle5: 'img/idle/idle5.png',
        idle6: 'img/idle/idle6.png',
        idle7: 'img/idle/idle7.png',
        idle8: 'img/idle/idle8.png',
        idle9: 'img/idle/idle9.png',
        // run
        run0: 'img/run/run0.png',
        run1: 'img/run/run1.png',
        run2: 'img/run/run2.png',
        run3: 'img/run/run3.png',
        run4: 'img/run/run4.png',
        run5: 'img/run/run5.png',
        run6: 'img/run/run6.png',
        run7: 'img/run/run7.png',
        run8: 'img/run/run8.png',
        run9: 'img/run/run9.png',
    }


    var defaultFPS = 30
    var game = GuaGame.instance(defaultFPS, images, function(g) {
        var scene = SceneTitle.new(g)
        // var scene = Scene.new(g)
        g.runWithScene(scene)
    })

    enableDebugMode(true, game)
}

__main()
