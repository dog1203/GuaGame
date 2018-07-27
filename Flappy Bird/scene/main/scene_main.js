class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }

    setup() {
        this.numberOfEnemies = 5
        this.numberOfCloud = 3
        this.bg = GuaImage.new(this.game, 'sky')
        this.player = Player.new(this.game)
        this.player.x = 100
        this.player.y = 150

        // this.cloud = GuaImage.new(this.game, 'cloud')

        this.addElements(this.bg)
        this.addElements(this.player)
        // this.addElements(this.cloud)
        // log(this.elements)

        this.addEnemies()
        this.addClouds()
    }
    addEnemies() {
        var es = []
        for (var i = 0; i < this.numberOfEnemies; i++) {
            var e = Enemy.new(this.game)
            es.push(e)
            this.addElements(e)
        }
        this.enemies = es
    }
    addClouds() {
        var cs = []
        for (var i = 0; i < this.numberOfCloud; i++) {
            var c = Cloud.new(this.game)
            cs.push(c)
            this.addElements(c)
        }
        this.clouds = cs
    }
    setupInputs() {
        var g = this.game
        var s = this
        g.registerAction('a', function() {
            s.player.moveLeft()
        })
        g.registerAction('d', function() {
            s.player.moveRight()
        })
        g.registerAction('w', function() {
            s.player.moveUp()
        })
        g.registerAction('s', function() {
            s.player.moveDown()
        })
        g.registerAction('f', function() {
            s.player.fire()
        })
    }

}
