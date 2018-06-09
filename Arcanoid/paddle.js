var Paddle = function() {
    var image = imageFromPath('paddle.png')
    var o = {
        image: image,
        x: 150,
        y: 200,
        speed: 5,
    }
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
