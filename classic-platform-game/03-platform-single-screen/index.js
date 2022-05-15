// import playerSprite from './assets/images/cursedmario50.png'

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// We modify the canvas size ?:
canvas.width = 700 //window.innerWidth
canvas.height = 700 //window.innerHeight

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
            x: {
                prev: 0,
                right: 0,
                left: 0
            },
            y: 1
        }
        this.width = 30
        this.height = 30

        this.num_jump = 0
        this.landed = false

        // this.image = createImage(playerSprite)
    }

    // Method to draw the player
    draw() {
        // ctx.drawImage(this.image, this.position.x, this.position.y)
        ctx.fillStyle = 'red'
        // We give oordenates and size to fillRect method of canvas 
        ctx.fillRect(this.position.x, this.position.y,
                    this.width, this.height)
    }
    // Method that changes player propieties over time and draw it
    update() {
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x.left + this.velocity.x.right
        if (this.velocity.x.left != 0 & this.velocity.x.right != 0) {
            this.position.x += this.velocity.x.prev
        }

        // Gravity action
        // if (this.position.y + this.height < canvas.height)
        //     this.velocity.y += gravity
        // else 
        //     this.velocity.y = 0
        if (this.landed == false) {
            this.velocity.y += gravity
        }

        // Map bounds:
        if (this.position.y + this.height >= canvas.height) { // Bottom bound
            this.position.y = canvas.height - this.height
            this.velocity.y = 0
            this.num_jump = 0 }     // jump counter
        if (this.position.x <= 0) {                          // Left bound
            this.position.x = 0 }
            // this.velocity.x.left = 0 }
        if (this.position.x + this.width >= canvas.width) {   // Right bound
            this.position.x = canvas.width - this.width }
            // this.velocity.x.right = 0 }
        if (this.position.y <= 0) {                           // Up bound
            this.position.y = 0 }

        // Jump counter:
        // if (this.velocity.y == 0) {this.num_jump = 0}
    }
}

// Class Platform 
class Platform {
    constructor({x, y, width, height}) {
        this.position = {
            x,
            y
        }
        this.width = width
        this.height = height
    }
    // Method to the platform
    draw() {
        ctx.fillStyle = 'blue'
        ctx.fillRect(this.position.x, this.position.y,
                    this.width, this.height)

    }
    // Method to update the platform
    // (Maybe we don't want to move the platform but we want
    // to check collisions with player)
    update() {
        this.draw()
        if (player.position.y + player.height <= this.position.y &&
            player.position.y + player.height + player.velocity.y >= this.position.y &&
            player.position.x + player.width >= this.position.x &&
            player.position.x <= this.position.x + this.width
            ) {
                player.position.y = this.position.y - player.height
                player.velocity.y = 0
                player.num_jump = 0
                player.landed = true
            } else {
                player.landed = false
            } 
    }
}

let pos2 = {x: 100, y:100}

const platform2 = new Platform(pos2,100,10)

// We create the initial objects in screen:
const player = new Player()
const platforms = [new Platform({x: 200, y: 500, width: 200, height: 20}),
                    new Platform({x: 50, y: 400, width: 100, height: 10}),
                    new Platform({x: 420, y: 300, width: 100, height: 10}) ]


//...... Loop that print and refreshes the screen .......

function animate() {
    requestAnimationFrame(animate)
    // We clean the canvas everytime
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // We update the player
    player.update()
    // We draw the platform
    platforms.forEach((platform) => {
        platform.update()
    })

}

// We call the loop function
animate()

// x speed of the controls of the player
const speed = 5



// Controls:
window.addEventListener('keydown', function(event) {
    // 'keydown' es código para un tipo de addEventListener
    // event guarda la información del evento escuchado
    console.log(event)
    switch (event.key) {
        // w up
        case 'w':
            console.log('up')
            break
        // s down
        case 's':
            console.log('down')
            break
        // a left
        case 'a':
            player.velocity.x.prev = -speed
            player.velocity.x.left = -speed
            break
        // d right
        case 'd':
            player.velocity.x.prev = speed
            player.velocity.x.right = speed
            break
        case ' ':
            if (player.num_jump < 2) {
                player.velocity.y = -10
                player.num_jump += 1
                player.landed = false
            }
            
    }
} )

window.addEventListener('keyup', function(event) {
    // 'keydown' es código para un tipo de addEventListener
    // event guarda la información del evento escuchado
    console.log(event.key)
    switch (event.key) {
        // w up
        case 'w':
            console.log('up keyup')
            break
        // s down
        case 's':
            console.log('down keyup')
            break
        // a left
        case 'a':
            player.velocity.x.left = 0
            break
        // d right
        case 'd':
            player.velocity.x.right = 0
            break
    }
} )

// a: 65
// w: 87
// d: 68
// s: 83