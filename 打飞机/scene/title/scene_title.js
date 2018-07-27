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
        self.game.registerAction('a', function() {
            self.w.move(-5)
        })

        self.game.registerAction('d', function() {
            self.w.move(5)
        })
    }

}
