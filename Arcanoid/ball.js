var Ball = function() {
    var image = imageFromPath('ball.png')
    var o = {
        image: image,
        x: 100,
        y: 250,
        speedX: 5,
        speedY: 5,
        fired: false,
    }
    o.fire = function() {
        o.fired = true
    }

    o.move = function() {
        if(!o.fired) {
            return
        }
        o.x += o.speedX
        o.y += o.speedY
        if(o.x > 400 || o.x < 0) {
            o.speedX *= -1
        }
        if(o.y > 300 || o.y < 0) {
            o.speedY *= -1
        }

    }

    o.rebound = function() {
        o.speedY *= -1
    }

    return o
}