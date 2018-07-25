class SceneEnd extends GuaScene {
    constructor(game) {
        super(game)
        game.registerAction('r', function() {
            var s = SceneTitle.new(game)
            game.replaceScene(s)
        })
    }

    draw() {
        // 绘制背景
        this.game.context.fillStyle = '#554'
        this.game.context.fillRect(0, 0, 400, 300)


        // draw labels - score
        this.game.context.fillStyle = 'white'
        this.game.context.fillText('游戏结束， 按 R 返回标题界面', 100, 290)
    }
    update() {

    }
}
