class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
    }

    setup() {
        this.bg = GuaImage.new(this.game, 'sky')
        this.player = GuaImage.new(this.game, 'player')
        this.player.x = 100
        this.player.y = 150

        this.cloud = GuaImage.new(this.game, 'cloud')


        this.addElements(this.bg)
        this.addElements(this.player)
        this.addElements(this.cloud)


        // log(this.elements)
    }


    update() {
        this.cloud.y += 1
    }
}
