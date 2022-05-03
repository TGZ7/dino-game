export function detectCollision(chara, block) {

    let chara_top = chara.position.y;
    let chara_bottom = chara.position.y + chara.height;
    let chara_left = chara.position.x
    let chara_right = chara.position.x + chara.width
    

    let block_top = block.position.y;
    let block_left = block.position.x;
    let block_right = block.position.x + block.width;

    if (
        block_top > chara_bottom &&
        (
        ( block_left > chara_left && block_left < chara_right ) ||
        ( block_right > chara_left && block_right < chara_right ) ||
        ( )


    )


    if (
      bottomOfBall >= topOfObject &&
      topOfBall <= bottomOfObject &&
      ball.position.x >= leftSideOfObject &&
      ball.position.x + ball.size <= rightSideOfObject
    ) {
      return true;
    } else {
      return false;
    }
  }