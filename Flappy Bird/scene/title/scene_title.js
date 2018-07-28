class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)



        var bg = GuaImage.new(game, 'bg')
        this.addElements(bg)

        this.grounds = []
        for (var i = 0; i < 30; i++) {
            var g = GuaImage.new(game, 'ground')
            g.x = i * 19
            g.y = 540
            this.addElements(g)
            this.grounds.push(g)
        }
        this.skipCount = 4
        this.setupInput(game)
    }
    setupInput(game) {
        var self = this
        game.registerAction('k', function(keyStatus) {
            log('k is down')
            var scene = Scene.new(game)
            // var scene = Scene.new(g)
            game.replaceScene(scene)
        })
    }
    update() {
        super.update()
    }

}
