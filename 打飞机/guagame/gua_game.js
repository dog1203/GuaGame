class GuaGame {
    constructor(fps, images, runCallback) {
        window.fps = fps
        this.images = images
        this.runCallback = runCallback
        this.scene = null
        this.actions = {}
        this.keydowns = {}
        this.canvas = document.querySelector("#id-canvas")
        this.context = this.canvas.getContext('2d')
        this.score = 0

        // events
        var self = this
        window.addEventListener('keydown', (event) => {
            this.keydowns[event.key] = true
        })
        window.addEventListener('keyup', (event) => {
            this.keydowns[event.key] = false
        })
        this.init()
    }

    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }

    drawImage(img) {
        // img 是一个 GuaImage
        this.context.drawImage(img.texture, img.x, img.y)
    }

    registerAction(key, callback) {
        this.actions[key] = callback
    }

    update() {
        this.scene.update()
    }

    draw() {
        this.scene.draw()
        // log('drawing in gua game')
    }

    runloop() {
        var g = this
        // events
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {

            var key = actions[i]
            // log('调用函数',  g.keydowns)
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
        setTimeout(function() {
            g.runloop()
        }, 1000 / window.fps)
    }

    init() {
        var g = this
        // 载入所有资源
        var loads = []
        var names = Object.keys(g.images)
        for (var i = 0; i < names.length; i++) {
            let name = names[i]
            var path = g.images[name]
            let img = new Image()
            img.src = path
            img.onload = function() {
                // 载入成功后
                g.images[name] = img
                // log('g.images', img)
                loads.push(1)
                if(loads.length == names.length) {
                    g.__start()
                }
            }
        }
    }

    textureByName(name) {
        var g = this
        // log(g.images)
        var img = g.images[name]
        return img
    }

    runWithScene(scene) {
        var g = this

        g.scene = scene
        setTimeout(function() {
            g.runloop()
        }, 1000 / window.fps)
    }

    replaceScene(scene) {
        this.scene = scene
    }

    __start() {
        this.runCallback(this)
    }


}
