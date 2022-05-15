/////// Sky ///////
class Sky {
    constructor() {
        this.abs_coordinates = {
            x: 0, // Math.floor(skySize.width/2),
            y: 0 // Math.floor(canvas.height/2)
        }
        this.coordinates = {
            x: anchor.coordinates.x + this.abs_coordinates.x,
            y: anchor.coordinates.y + this.abs_coordinates.y
        }
        this.size = skySize
        // this.image = sky_img
    }

    draw() {
        ctx.drawImage(sky_img,this.coordinates.x, this.coordinates.y,
                        this.size.width, this.size.height)

    }
    update() {
        this.draw()
        
        if (player.freezed == true) {
            this.coordinates.x = this.abs_coordinates.x + Math.floor(anchor.coordinates.x * 0.1)
        }
    }
}