/////// Class Platform /////// 
class Platform {
    constructor({x, y, n_width, n_height}) {
        this.abs_coordinates = {
            x: x,
            y: y
        }
        this.coordinates = {
            x: anchor.coordinates.x + x,
            y: anchor.coordinates.y + y
        }
        this.tileSize = tileSize
        this.n_width = n_width
        this.n_height = n_height
        this.width = this.n_width * this.tileSize
        this.height = this.tileSize
    }
    // Method to the platform
    draw() {
        // ctx.fillStyle = 'blue'
        // ctx.fillRect(this.coordinates.x, this.coordinates.y,
        //             this.width, this.height)
        // Modo experimental:
        // ctx.drawImage(pj_img,this.coordinates.x,this.coordinates.y,this.width, this.height)
        for (let step = 0; step <= this.n_width; step++) {
            ctx.drawImage(
                blocks_img,           // Crop of the image:
                952,                  // top left px
                0,                  // bottom left px??
                224,                 // width 
                224,                 // height
                this.coordinates.x + (step*this.tileSize), this.coordinates.y,
                this.tileSize, this.tileSize
            )
        }

    }
    // Method to update the platform
    update() {
        this.draw()
        // Collision with the players
        if (player.coordinates.y + player.size.height <= this.coordinates.y &&
            player.coordinates.y + player.size.height + player.velocity.y >= this.coordinates.y &&
            player.coordinates.x + player.size.width >= this.coordinates.x &&
            player.coordinates.x <= this.coordinates.x + this.width
            ) {
                player.coordinates.y = this.coordinates.y - player.size.height
                player.velocity.y = 0
                player.num_jump = 0
                player.landed = true
            } else {
                player.landed = false
            } 
        
        if (player.freezed == true) {
            this.coordinates.x = anchor.coordinates.x + this.abs_coordinates.x
        }
    }
}

class Sign {
    constructor({x, y}) {
        this.abs_coordinates = {
            x: x,
            y: y
        }
        this.coordinates = {
            x: anchor.coordinates.x + x,
            y: anchor.coordinates.y + y
        }
        this.tileSize = tileSize
    }
    draw() {
        ctx.drawImage(
            sign_img,            
            this.coordinates.x, this.coordinates.y,
            this.tileSize, this.tileSize
        )
    }
    update() {
        this.draw()
        if (player.coordinates.x >= (this.coordinates.x - this.tileSize) &&
            player.coordinates.x <= (this.coordinates.x + this.tileSize)) {
                // ctx.translate(10, 50);
                // ctx.fillStyle = "Red";
                // ctx.mozDrawText("Sample String");
                ctx.fillStyle = 'red'
                ctx.fillRect(this.coordinates.x, this.coordinates.y - 100, // We give oordenates and size to fillRect method of canvas
                            50, 50)
                rain_check = false
                drop_list = [new Drop()]
            }
        if (player.freezed == true) {
            this.coordinates.x = anchor.coordinates.x + this.abs_coordinates.x
        }
        if (player.coordinates.x >= (this.coordinates.x + 3*this.tileSize)) {
            rain_check = true
        }
    }
}


/* Notes (14/5/22):
When the player go to a certain point of the screen to the left or the right,
the controls don't change the coordinates of the player.

In that case player.freezed = true and the controls change the coordinates of
the anchor. 

Then, we update all the objects with coord = anchor.coord + abs_coord

*/