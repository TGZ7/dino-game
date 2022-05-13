// Classes in their own files:
// Player
// Platform

// Function that calc x movement in base of controls (Player and Platform uses it)
function xmovement(x, x_left_vel, x_right_vel, x_last_vel) {
    x += x_left_vel + x_right_vel
    if (x_left_vel != 0 && x_right_vel != 0) {
        x += x_last_vel
    }
    return x
}

const firstPlatform = {x: 200, y: 500, width: 200, height: 20}

// We create the initial objects in screen:
const player = new Player()
const platforms = [ new Platform(firstPlatform),
                    new Platform({x: 50, y: 400, width: 100, height: 10}),
                    new Platform({x: 420, y: 300, width: 100, height: 10}) ]

var drop_list = [new Drop()]

//....... Loop that print and refreshes the screen .......//
function animate() {
    requestAnimationFrame(animate)
    // We clean the canvas everytime
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // We update the player
    player.update()
    // We draw the platform
    platforms.forEach((platform) => {
        platform.update()
    })
    // How far right the player has gone
    player.scrollOffset = -(platforms[0].position.x - firstPlatform.x)
    
    // We plot the drops
    drop_list = dropManager(drop_list)
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
            // console.log(player.position.x)
            // console.log('up')
            break
        // s down
        case 's':
            // console.log('down')
            break
        // a left
        case 'a':
            console.log(player.scrollOffset)
            player.velocity.x.last = -speed
            player.velocity.x.left = -speed
            break
        // d right
        case 'd':
            console.log(player.scrollOffset)
            player.velocity.x.last = speed
            player.velocity.x.right = speed
            break
        case ' ':
            if (player.num_jump < 2) {
                player.velocity.y = -10
                player.num_jump += 1
                player.landed = false
            }
            
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
            player.velocity.x.left = 0
            break
        // d right
        case 'd':
            player.velocity.x.right = 0
            break
    }
} )

// a: 65
// w: 87
// d: 68
// s: 83