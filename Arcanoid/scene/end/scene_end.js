var SceneEnd = function(game) {
    var s = {
        game: game,
    }



    game.registerAction('r', function() {
        // log('return to title page')
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
        game.context.fillText('游戏结束， 按 R 返回标题界面', 100, 290)
    }

    return s
}
