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
            // (Special feature) => drop_list.push(new Drop()) // 1 drop and BLOOD RAIN
            drop.__init__()
            drops_fallen += 1
            drops_fallen_message = 'drops_fallen: ' + String(drops_fallen)
            console.log(drops_fallen_message)
            console.log('module5: ' + String(drops_fallen % 5))
            console.log(drops_fallen % 5 === 0)

            if (drops_fallen % 5 == 0) {
                drop_list.push(new Drop())
            }
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
        this.speed += gravity*0.1
        /* La mecánica de resetear cuando llega abajo, actualizar
           una variable global y empezar algo, debería ir aquí o fuera?
        */
        // if (this.coordinates.y >= canvas.height) {
        //     // (Special feature) => drop_list.push(new Drop()) // 1 drop and BLOOD RAIN
        //     this.__init__()
        //     drops_fallen += 1
        //     drops_fallen_message = 'drops_fallen: ' + String(drops_fallen)
        //     console.log(drops_fallen_message)
        //     console.log('module5: ' + String(drops_fallen % 5))
        //     console.log(drops_fallen % 5 === 0)
        // }
    }
    __init__() {
        this.coordinates = {
            x: Math.floor(Math.random() * canvas.width),
            y: 0 //Math.floor(dropSize.height/2) <- No hace falta, ya lo centra
        }
        // range = dropSpeedLimits[1]-dropSpeedLimits[0]
        this.speed = Math.floor(Math.random() * dropSpeedLimits[1]-dropSpeedLimits[0]) + dropSpeedLimits[0]
        this.size = dropSize
    }
}