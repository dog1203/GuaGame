var Paddle = function() {
    var image = imageFromPath('paddle.png')
    var o = {
        image: image,
        x: 150,
        y: 200,
        speed: 5,
    }
    o.moveLeft = function() {
        o.x -= o.speed
    }

    o.moveRight = function() {
        o.x += o.speed
    }

    o.collide = function(obj) {
        return intersect(o, obj)
    }

    return o
}
