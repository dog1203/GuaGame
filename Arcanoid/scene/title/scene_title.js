var SceneTitle = function(game) {
    var s = {
        game: game,
    }

    game.registerAction('k', function() {
        var s = Scene(game)
        game.replaceScene(s)
    })

    s.update = function() {

    }

    s.draw = function() {
        // 绘制背景
        game.context.fillStyle = '#554'
        game.context.fillRect(0, 0, 400, 300)


        // draw labels - score
        game.context.fillStyle = 'white'
        game.context.fillText('开始游戏， 按 K 开始游戏', 100, 290)
    }

    return s
}
