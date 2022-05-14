/////// Class Player ///////
class Player {
    /*  With constructor we stablish the propieties
        we want in the object any time we create it */ 
    constructor() {
        this.coordinates = {
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
        this.size = {
            width: 50,
            height: 50
        }

        this.num_jump = 0
        this.landed = false
        this.freezed = false  // When the world is horizontal scrolling, we are freezed
        this.scrollOffset = 0 // How far has the player travelled from 0px to the right
        this.frame = 0
        this.state = 'standing_right'
        // this.image = createImage(playerSprite)
    }

    // Method to draw the player
    draw(state) {
        // // When it was a square:
        // ctx.fillStyle = 'red'
        // ctx.fillRect(this.coordinates.x, this.coordinates.y, // We give oordenates and size to fillRect method of canvas
        //             this.width, this.height)
        // // When it didn't move:
        // ctx.drawImage(pj_img, this.coordinates.x, this.coordinates.y,
        //                 this.size.width, this.size.height)
        switch (state) {
            case 'standing_right':
                ctx.drawImage(
                    pj_img,           // Crop of the image:
                    0,                  // top left px
                    0,                  // bottom left px
                    50,                 // width 
                    50,                 // height
                    this.coordinates.x, this.coordinates.y,
                    this.size.width, this.size.height
                )
                break
            case 'righting':
                ctx.drawImage(
                    pj_img,           // Crop of the image:
                    50 * Math.floor(this.frame),    // top left px
                    0,                  // bottom left px
                    50,                 // width 
                    50,                 // height
                    this.coordinates.x, this.coordinates.y,
                    this.size.width, this.size.height
                )
                break
            case 'standing_left':
                ctx.drawImage(
                    pj_img,           // Crop of the image:
                    0,                  // top left px
                    0,                  // bottom left px
                    50,                 // width 
                    50,                 // height
                    this.coordinates.x, this.coordinates.y,
                    this.size.width, this.size.height
                )
                break
            case 'lefting':
                ctx.drawImage(
                    pj_img,           // Crop of the image:
                    50 * Math.floor(this.frame),    // top left px
                    0,                  // bottom left px
                    50,                 // width 
                    50,                 // height
                    this.coordinates.x, this.coordinates.y,
                    this.size.width, this.size.height
                )
                break
            case 'jumping':
                break
        }
    }

    refreshFrame(state) {
        switch (state) {
            case 'standing_right':
                this.frame = 0
                break
            case 'righting':
                var _frame = this.frame
                _frame += 0.2
                if (_frame >= 2) {
                    _frame = 0
                }
                this.frame = _frame
                break
            case 'standing_left':
                this.frame = 0
                break
            case 'lefting':
                var _frame = this.frame
                _frame += 0.2
                if (_frame >= 2) {
                    _frame = 0
                }
                this.frame = _frame
                break
            case 'jumping':
                break
        }

    }

    // Method that changes player propieties over time and draw it
    update() {
        this.draw(this.state)
        this.refreshFrame(this.state)
        // Controlls movement
        this.coordinates.y += this.velocity.y // y movement
        // In x it will move in a range. Then we move the world instead
        if (this.freezed == false) {
            this.coordinates.x = xmovement(this.coordinates.x, this.velocity.x.left, 
                this.velocity.x.right, this.velocity.x.last)
        }
        // Gravity action
        if (this.landed == false) {
            this.velocity.y += gravity
        }
        // Map bounds:
        if (this.coordinates.y + this.size.height >= canvas.height) { // Bottom bound
            this.coordinates.y = canvas.height - this.size.height
            this.velocity.y = 0
            this.num_jump = 0 }     // jump counter
        if (this.coordinates.x <= 0) {                          // Left bound
            this.coordinates.x = 0 }
            // this.velocity.x.left = 0 }
        if (this.coordinates.x + this.size.width >= canvas.width) {   // Right bound
            this.coordinates.x = canvas.width - this.size.width }
            // this.velocity.x.right = 0 }
        if (this.coordinates.y <= 0) {                           // Up bound
            this.coordinates.y = 0 }

        // Win screen: 
        //                          (here in Player or in another class? 
        //                              Better in a future class of World that contains 
        //                                  all the screen artifacts besides the player?)
        if (this.scrollOffset > 2000) {
            console.log('you win')
        }
    
    }
}