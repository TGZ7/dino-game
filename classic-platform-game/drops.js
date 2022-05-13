/////// Drops ///////
function dropManager(drop_list) {
    /*
    Take a list of Drop objects, draw them,
    update their coords and create new ones
    when necesary 
    */
    drop_list.forEach((drop) =>{
        drop.coordinates.x += 
    })
    draw_drop(x,y)
    y += 1
    return x, y
}

function draw_drop(x,y) {
    ctx.fillStyle = 'red'
    ctx.fillRect(x,y,20,20)
}

function new_drop() {
    y = 0
    x = Math.floor(Math.random() * canvas.width)
    speed = Math.ceil
    return x, y 
}


class Drop {
    constructor(x,y,speed) {
        this.coordinates = {
            x: x,
            y: y
        }
        this.speed = speed
    }
}