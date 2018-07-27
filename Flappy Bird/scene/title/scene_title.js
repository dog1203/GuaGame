class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        var label = GuaLabel.new(game, 'hello')
        this.addElements(label)

        var w = GuaAnimation.new(game)
        w.x = 0
        w.y = 0
        this.w = w
        this.addElements(w)
        this.setupInput()
    }
    setupInput() {
        var self = this
        self.game.registerAction('a', function(keyStatus) {
            self.w.move(-5, keyStatus)
        })

        self.game.registerAction('d', function(keyStatus) {
            self.w.move(5, keyStatus)
        })
    }

}
