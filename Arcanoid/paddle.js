var Paddle = function(game) {
    var o = game.imageByName('paddle')
    // log('paddle object is ', o)

    o.x = 150
    o.y = 200
    o.speed = 5
    o.moveLeft = function() {
        o.x = limitRange(o.x - o.speed, 0, 400 - o.image.width)
    }

    o.moveRight = function() {
        o.x = limitRange(o.x + o.speed, 0, 400 - o.image.width)
    }

    o.collide = function(obj) {
        return intersect(o, obj)
    }

    return o
}
