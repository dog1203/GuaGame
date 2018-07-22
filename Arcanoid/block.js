var Block = function(position, game) {
    // position 是一个[0, 0, 0] 格式的list，第三个元素是生命
    p = position
    var o = game.imageByName('block')

    o.x = p[0]
    o.y = p[1]
    o.alive = true
    o.lives = p[2] || 1

    o.collide = function(obj) {
        return intersect(o, obj)
    }

    o.kill = function() {
        o.lives -= 1
        if(o.lives < 1) {
            o.alive = false
        }
    }

    return o
}
