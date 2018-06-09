var GuaGame = function(fps) {
    var canvas = document.querySelector("#id-canvas")
    var context = canvas.getContext('2d')
    var g = {
        actions: {},
        keydowns: {},
        fps: fps,
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
    setTimeout(function() {
        runloop()
    }, 1000 / g.fps)


    return g
}
