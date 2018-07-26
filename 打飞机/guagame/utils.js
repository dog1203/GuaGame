


const log = console.log.bind(console)


const imageFromPath = function(path) {
    var img = new Image()
    img.src = path
    return img
}


const intersect = function(o, obj) {
        var half1Width = o.image.width / 2
        var half1Height = o.image.height / 2
        var half2Width = obj.image.width / 2
        var half2Height = obj.image.height / 2
        var cen1 = {
            x: o.x + half1Width,
            y: o.y + half1Height,
        }
        var cen2 = {
            x: obj.x + half2Width,
            y: obj.y + half2Height,
        }

        return Math.abs(cen2.x - cen1.x) <= half1Width + half2Width &&
            Math.abs(cen2.y - cen1.y) <= half1Height + half2Height
}


const limitRange = function(x, low, high) {
    if(x > high) {
        x = high
    } else if( x < low) {
        x = low
    }
    return x
}


const loadLevels = function(n, game) {
    var blocks = []
    var n = n - 1
    var level = levels[n]
    for (var i = 0; i < level.length; i++) {
        var position = level[i]
        var block = Block(position, game)
        blocks.push(block)
    }
    return blocks
}
