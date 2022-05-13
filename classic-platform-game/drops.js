/////// Drops ///////
function dropManager(drop_list) {
    /*
    Take a list of Drop objects, draw them,
    update their coords and create new ones
    when necesary 
    */
    drop_list.forEach((drop) =>{
        drop.update()
        if (drop.coordinates.y >= canvas.height) {
            // var newDrop = new Drop()
            drop_list.push(new Drop())
        }
    })
    return drop_list
}


// function new_drop() {
//     y = 0
//     x = Math.floor(Math.random() * canvas.width)
//     range = dropSpeedLimits[1]-dropSpeedLimits[0]
//     speed = Math.floor(Math.random() * range) + dropSpeedLimits[0]
//     return x, y, speed
// }


class Drop {
    constructor() {
        // this.coordinates.y = 0
        // this.coordinates.x = Math.floor(Math.random() * canvas.width)
        // range = dropSpeedLimits[1]-dropSpeedLimits[0]
        // this.speed.speed = Math.floor(Math.random() * range) + dropSpeedLimits[0]
        this.coordinates = {
            x: 0,
            y: 0
        }
        this.speed = 0
        this.size = 0
        this.__init__()
    }
    draw() {
        ctx.fillStyle = 'red'
        ctx.fillRect(this.coordinates.x, this.coordinates.y,
                        this.size.width, this.size.height)
    }
    update() {
        this.draw()
        this.coordinates.y += this.speed
    }
    __init__() {
        this.coordinates.y = 0
        this.coordinates.x = Math.floor(Math.random() * canvas.width)
        // range = dropSpeedLimits[1]-dropSpeedLimits[0]
        this.speed = Math.floor(Math.random() * dropSpeedLimits[1]-dropSpeedLimits[0]) + dropSpeedLimits[0]
        this.size = dropSize
    }
}