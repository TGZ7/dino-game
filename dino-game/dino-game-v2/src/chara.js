import * as config from '/src/config';

class Chara {
    constructor(game_witdth, game_height){

        this.image = document.getElementById("img_chara");

        this.width = config.chara_width;
        this.height = config.chara_height;

        this.position = {

            x: game_witdth/10,

            y: game_height - this.height


        }

    }



    draw(ctx) {



    }
}