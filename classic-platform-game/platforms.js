/////// Class Platform /////// 
class Platform {
    constructor({x, y, width, height}) {
        this.abs_coordinates = {
            x: x,
            y: y
        }
        this.coordinates = {
            x: anchor.coordinates.x + x,
            y: anchor.coordinates.y + y
        }
        this.width = width
        this.height = height
    }
    // Method to the platform
    draw() {
        ctx.fillStyle = 'blue'
        ctx.fillRect(this.coordinates.x, this.coordinates.y,
                    this.width, this.height)
        // Modo experimental:
        // ctx.drawImage(pj_img,this.coordinates.x,this.coordinates.y,this.width, this.height)
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

/* Notes (14/5/22):
When the player go to a certain point of the screen to the left or the right,
the controls don't change the coordinates of the player.

In that case player.freezed = true and the controls change the coordinates of
the anchor. 

Then, we update all the objects with coord = anchor.coord + abs_coord

*/