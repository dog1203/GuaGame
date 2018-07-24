class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        game.registerAction('k', function() {
            var s = Scene.new(game)
            game.replaceScene(s)
        })
    }

    draw() {
        // draw the background
        this.game.context.fillStyle = '#554'
        this.game.context.fillRect(0, 0, 400, 300)


        // draw labels - score
        this.game.context.fillStyle = 'white'
        this.game.context.fillText('开始游戏， 按 K 开始游戏', 100, 290)
    }
    update() {

    }
}
