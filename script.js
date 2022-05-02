var character = document.getElementById("character");
var block = document.getElementById("block");

function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }else
        console.log('hola')
    // character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

// Constant propieties
var characterWidth = parseInt(window.getComputedStyle(character).getPropertyValue("width"));
var characterHeight = parseInt(window.getComputedStyle(character).getPropertyValue("height"));
var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
var blockWidth = parseInt(window.getComputedStyle(block).getPropertyValue("width"));
var blockHeight = parseInt(window.getComputedStyle(block).getPropertyValue("height"));
var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));


// Check dead
var checkDead = setInterval(function(){
    // We obtain the propiety "Top" (in the css) of the variable character
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft > characterLeft && blockLeft < (characterLeft + characterWidth) && characterTop > blockTop ){
        // We stop the animation
        block.style.animation = "none";
        block.style.display = "none";
        alert("You lost");
    }

},10);