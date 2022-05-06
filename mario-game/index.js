const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// We modify the canvas size ?:
// canvas.width = window.innerWidth
// canvas.width = window.innerHeight

const gravity = 0.5
// Class Player 
class Player {
    /*  With constructor we stablish the propieties
        we want in the object any time we create it */ 
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 1
        }
        this.width = 30
        this.height = 30
    }

    // Method to draw the player
    draw() {
        ctx.fillStyle = 'red'
        // We give oordenates and size to fillRect method of canvas 
        ctx.fillRect(this.position.x, this.position.y,
                    this.width, this.height)
    }
    // Method that changes player propieties over time and draw it
    update() {
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        // Gravity action
        if (this.position.y + this.height < canvas.height)
            this.velocity.y += gravity
        else 
            this.velocity.y = 0

        // Map bounds:
        if (this.position.y + this.height >= canvas.height) { // Bottom bound
            this.position.y = canvas.height - this.height
            this.velocity.y = 0 }
        if (this.position.x <= 0) {                          // Left bound
            this.position.x = 0
            this.velocity.x = 0 }
        if (this.position.x + this.width >= canvas.width) {   // Right bound
            this.position.x = canvas.width - this.width
            this.velocity.x = 0 }
        if (this.position.y <= 0) {                           // Up bound
            this.position.y = 0 }
    }
}

// We create the player
const player = new Player()


//...... Loop that print and refreshes the screen .......

function animate() {
    requestAnimationFrame(animate)
    // We clean the canvas everytime
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // We update the player ()
    player.update()
}

// We call the loop function
animate()

// Controls:
window.addEventListener('keydown', function(event) {
    // 'keydown' es código para un tipo de addEventListener
    // event guarda la información del evento escuchado
    console.log(event.key)
    switch (event.key) {
        // w up
        case 'w':
            player.velocity.y -= 10
            break
        // s down
        case 's':
            player.velocity.y += 1
            break
        // a left
        case 'a':
            player.velocity.x -= 1
            break
        // d right
        case 'd':
            player.velocity.x += 1
            break
    }
} )

// a: 65
// w: 87
// d: 68
// s: 83