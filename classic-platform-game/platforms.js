/////// Class Platform /////// 
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
        // Modo experimental:
        // ctx.drawImage(pj_img,this.position.x,this.position.y,this.width, this.height)
    }
    // Method to update the platform
    update() {
        this.draw()
        // Collision with the players
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
        // Horizontal scroll of the world:
        if (
            (player.position.x >= 400 && 
            (player.velocity.x.right !=0 && 
               (player.velocity.x.left == 0 || player.velocity.x.last > 0 ))) ||
           (player.position.x <= 100 && 
               (player.velocity.x.left !=0 && 
                   (player.velocity.x.right == 0 || player.velocity.x.last < 0 ))) 
        ) { 
           player.freezed = true
           this.position.x = xmovement(this.position.x, -player.velocity.x.left, 
                                   -player.velocity.x.right, -player.velocity.x.last)
        } else {player.freezed = false}
    }
}