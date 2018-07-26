class GuaLabel {
    constructor(game, text) {
        this.game = game
        this.text = text
        this.x = 100
        this.y = 300
    }
    static new(game, text) {
        return new this(game, text)
    }
    draw() {
        this.game.context.fillText(this.text, this.x, this.y)
    }
    update() {
        
    }
}
