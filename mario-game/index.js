const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// We modify the canvas size:
// canvas.width = window.innerWidth

// Class Player 
class Player {
    /*  With constructor we stablish the propieties
        we want in the object any time we create it */ 
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.width = 100
        this.height = 100
    }
    // Methods inside the class:
    // Method to draw the player
    draw() {
        // We give oordenates and size to fillRect method of canvas 
        ctx.fillRect(this.position.x, this.position.y,
                    this.width, this.height)
    }
}

// We create the player
const player = new Player()
// We draw the player
player.draw()