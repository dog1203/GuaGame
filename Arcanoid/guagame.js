var GuaGame = function(fps, images, runCallback) {
    var canvas = document.querySelector("#id-canvas")
    var context = canvas.getContext('2d')
    var g = {
        actions: {},
        keydowns: {},
        fps: fps,
        images: {},
    }

    g.canvas = canvas
    g.context = context

    // draw image
    g.drawImage = function(guaImage) {
        g.context.drawImage(guaImage.image, guaImage.x, guaImage.y)
    }

    // events
    window.addEventListener('keydown', function(event) {
        g.keydowns[event.key] = true
    })
    window.addEventListener('keyup', function(event) {
        g.keydowns[event.key] = false
    })

    g.registerAction = function(key, callback) {
        g.actions[key] = callback
    }


    // timer
    var runloop = function() {
        // events
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if(g.keydowns[key]) {
                g.actions[key]()
            }
        }

        // update
        g.update()
        // clear
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
        // draw
        g.draw()
        setTimeout(runloop, 1000 / g.fps)
    }

    g.run = function() {
        runCallback(g)
        setTimeout(function() {
            runloop()
        }, 1000 / g.fps)
    }

    g.imageByName = function(name) {
        // log(g.images)
        var img = g.images[name]
        // log('img, ', g.images['paddle'])
        log('img:', name, img )
        var image = {
            image: img,
            width: img.width,
            height: img.height,
        }
        return image
    }

    // 载入所有资源
    var loads = []
    var names = Object.keys(images)
    for (var i = 0; i < names.length; i++) {
        let name = names[i]
        var path = images[name]
        let img = new Image()
        img.src = path
        img.onload = function() {
            // 载入成功后
            g.images[name] = img
            // log('g.images', img)
            loads.push(1)
            if(loads.length == names.length) {
                g.run()
            }
        }
    }

    // 开始运行程序
    // g.run()


    return g
}
