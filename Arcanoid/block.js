var Block = function() {
    var image = imageFromPath('block.png')
    var o = {
        image: image,
        x: 50,
        y: 20,
        alive: true,
        lives: 2,
    }

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
