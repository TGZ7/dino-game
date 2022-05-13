/////// Class Player ///////
class Player {
    /*  With constructor we stablish the propieties
        we want in the object any time we create it */ 
    constructor() {
        this.position = {
            x: 200,
            y: 100
        }
        this.velocity = {
            x: {
                last: 0,
                right: 0,
                left: 0
            },
            y: 1
        }
        this.width = 50 //30
        this.height = 50 //30

        this.num_jump = 0
        this.landed = false
        this.freezed = false  // When the world is horizontal scrolling, we are freezed
        this.scrollOffset = 0 // How far has the player travelled from 0px to the right

        // this.image = createImage(playerSprite)
    }

    // Method to draw the player
    draw() {
        // ctx.fillStyle = 'red'
        // ctx.fillRect(this.position.x, this.position.y, // We give oordenates and size to fillRect method of canvas
        //             this.width, this.height)
        ctx.drawImage(pj_img,this.position.x,this.position.y,this.width, this.height)

    }
    // Method that changes player propieties over time and draw it
    update() {
        this.draw()
        // Controlls movement
        this.position.y += this.velocity.y // y movement
        // In x it will move in a range. Then we move the world instead
        if (this.freezed == false) {
            this.position.x = xmovement(this.position.x, this.velocity.x.left, 
                this.velocity.x.right, this.velocity.x.last)
        }
        // Gravity action
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

        // Win screen: 
        //                          (here in Player or in another class? 
        //                              Better in a future class of World that contains 
        //                                  all the screen artifacts besides the player?)
        if (this.scrollOffset > 2000) {
            console.log('you win')
        }
    
    }
}