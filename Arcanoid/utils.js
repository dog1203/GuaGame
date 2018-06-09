var log = console.log.bind(console)


var imageFromPath = function(path) {
    var img = new Image()
    img.src = path
    return img
}


var intersect = function(o, obj) {
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