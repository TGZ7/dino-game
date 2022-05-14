/////// Settings ///////

//new SVGScriptElement

// // Scripts elements
// var sky_js = document.createElement('script')
// sky_js.src = 'sky.js'

//------ Canvas ------//
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// We modify the canvas size ?:
canvas.width = 700 //window.innerWidth
canvas.height = 360 //window.innerHeight

//------ Images ------//
var pj_img = new Image();
pj_img.src = 'assets/images/cursedPlumberSprites.png'
var evil_elmo_img = new Image()
evil_elmo_img.src = 'assets/images/evilelmotiny.png'
var sky_img = new Image()
sky_img.src = 'assets/images/sky1280.png'

//------ Physics laws ------//
const gravity = 0.5
// x speed of the controls of the player
const speed = 5

//// Drops
const dropSize = { width: 40, height: 40}
const dropSpeedLimits = [2,10]
var drops_fallen = 0
var drops_fallen_message = 'drops_fallen: '

var rain_check = false // check to start the rain

//// Sky
const skySize = {width: 1280, height: canvas.height}