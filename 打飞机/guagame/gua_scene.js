class GuaScene {
    constructor(game) {
        this.game = game
        this.debugModeEnabled = true
        this.elements = []

    }
    static new(game) {
        var i = new this(game)
        return i
    }
    draw() {
        for (var e of this.elements) {
            e.draw()
        }
    }
    addElements(e) {
        e.scene = this
        this.elements.push(e)
    }
    removeElements(e) {
        e.scene = this
        var index = this.elements.indexOf(e)
        this.elements.splice(index, 1)
    }

    update() {
        if(this.debugModeEnabled) {
            for (var i = 0; i < this.elements.length; i++) {
                var e = this.elements[i]
                e.debug && e.debug()
            }
        }
        for (var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            e.update()
        }
    }
}
