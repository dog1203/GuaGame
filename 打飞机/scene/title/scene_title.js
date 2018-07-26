class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        var label = GuaLabel.new(game, 'hello')
        this.addElements(label)


        var ps = GuaParticleSystem.new(game)
        log(ps)
        this.addElements(ps)

        game.registerAction('k', function() {
            var s = Scene.new(game)
            game.replaceScene(s)
        })
    }

}
