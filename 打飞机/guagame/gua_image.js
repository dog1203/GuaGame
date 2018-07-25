class GuaImage {
    constructor(game, name) {
        this.texture = game.textureByName(name)
        this.x = 0
        this.y = 0
        this.w = this.texture.width
        this.h = this.texture.height

    }
    static new(game, name) {
        var i = new this(game, name)
        return i
    }
    draw() {

    }
    update() {

    }
}

// 逻辑上来看（用途不同，一个是图片，一个有逻辑），这里不应该继承，应该组合？
// class Player extends GuaImage {
//     constructor(game, name) {
//         super(game, name)
//
//     }
// }
