// Classes in their own files:
// Player
// Platform

class Anchor {
    constructor() {
        this.coordinates = {
            x: 0,
            y: 0
        }
    }

    update() {
        // Freeze and unfreeze the player and move the Anchor horizontally
        if (
            (player.coordinates.x >= 400 && 
            (player.velocity.x.right !=0 && 
            (player.velocity.x.left == 0 || player.velocity.x.last > 0 ))) ||
        (player.coordinates.x <= 100 && 
            (player.velocity.x.left !=0 && 
                (player.velocity.x.right == 0 || player.velocity.x.last < 0 ))) 
        ) { 
        player.freezed = true
        this.coordinates.x = xmovement(this.coordinates.x, -player.velocity.x.left, 
                                -player.velocity.x.right, -player.velocity.x.last)
        } else {player.freezed = false}
    }
}

// Function that calc x movement in base of controls (Player and Platform uses it)
function xmovement(x, x_left_vel, x_right_vel, x_last_vel) {
    x += x_left_vel + x_right_vel
    if (x_left_vel != 0 && x_right_vel != 0) {
        x += x_last_vel
    }
    return x
}

const anchor = new Anchor()

const firstPlatform = {x: 200, y: canvas.height - 100, width: 200, height: 20}

// We create the initial objects in screen:
const player = new Player()
const platforms = [ new Platform(firstPlatform),
                    new Platform({x: 50, y: canvas.height-200, width: 100, height: 10}),
                    new Platform({x: 420, y: canvas.height-300, width: 100, height: 10}) ]

var drop_list = [new Drop()]

var sky_object = new Sky()


//....... Loop that print and refreshes the screen .......//
function animate() {
    requestAnimationFrame(animate)
    // // We clean the canvas everytime
    // ctx.clearRect(0, 0, canvas.width, canvas.height)
    // Instead of clear the canvas, we color it
    ctx.fillStyle = 'aliceblue'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    // We update the anchor
    anchor.update()
    // We update the sky
    sky_object.update()
    // We update the player
    player.update()
    // We draw the platform
    platforms.forEach((platform) => {
        platform.update()
    })
    // How far right the player has gone
    player.scrollOffset = -(platforms[0].coordinates.x - firstPlatform.x)
    // We plot the drops
    if (rain_check == true) {
        drop_list = dropManager(drop_list)
    }
    
}

// We call the loop function
animate()

// Controls:
window.addEventListener('keydown', function(event) {
    // 'keydown' es código para un tipo de addEventListener
    // event guarda la información del evento escuchado
    // console.log(event)
    switch (event.key) {
        // w up
        case 'w':
            // console.log(player.coordinates.x)
            // console.log('up')
            break
        // s down
        case 's':
            // console.log('down')
            break
        // a left
        case 'a':
            player.state = 'lefting'
            player.velocity.x.last = -speed
            player.velocity.x.left = -speed
            console.log(player.scrollOffset)
            break
        // d right
        case 'd':
            player.state = 'righting'
            player.velocity.x.last = speed
            player.velocity.x.right = speed
            console.log(player.scrollOffset)
            break
        case ' ':
            if (player.num_jump < 2) {
                // player.state = 'jumping'
                player.velocity.y = -10
                player.num_jump += 1
                player.landed = false
            }
            console.log(anchor.coordinates.x)
            break
            
    }
} )

window.addEventListener('keyup', function(event) {
    // 'keydown' es código para un tipo de addEventListener
    // event guarda la información del evento escuchado
    switch (event.key) {
        // w up
        case 'w':
            // console.log('up keyup')
            break
        // s down
        case 's':
            // console.log('down keyup')
            break
        // a left
        case 'a':
            player.state = 'standing_left'
            player.velocity.x.left = 0
            break
        // d right
        case 'd':
            player.state = 'standing_right'
            player.velocity.x.right = 0
            break
    }
} )

// a: 65
// w: 87
// d: 68
// s: 83