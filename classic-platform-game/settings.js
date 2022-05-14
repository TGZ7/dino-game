/////// Settings ///////

//------ Canvas ------//
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// We modify the canvas size ?:
canvas.width = 700 //window.innerWidth
canvas.height = 700 //window.innerHeight

//------ Images ------//
var pj_img = new Image(30, 30);
pj_img.src = 'assets/images/cursedmario50.png';

//------ Physics laws ------//
const gravity = 0.5
// x speed of the controls of the player
const speed = 5

//// Drops
const dropSize = { width: 20, height: 20}
const dropSpeedLimits = [2,10]
var drops_fallen = 0
var drops_fallen_message = 'drops_fallen: '