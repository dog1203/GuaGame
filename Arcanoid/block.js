var Block = function() {
    var image = imageFromPath('block.png')
    var o = {
        image: image,
        x: 50,
        y: 20,
        alive: true,
    }

    o.collide = function(obj) {
        return intersect(o, obj)
    }

    o.kill = function() {
        o.alive = false
    }

    return o
}
