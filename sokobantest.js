function Jogador(posX, posY) {
    this.posX = posX;
    this.posY = posY;
}
const player = new Jogador(0, 0);

const element = document.querySelector('.player');

// player.addEventListener("click", function(){
//     alert("Clicou no jogador");
// })
window.addEventListener("keydown", function (event) {
    nextPosition(event.code);

    function nextPosition(keycode) {
        if (keycode === 'ArrowUp' && player.x) player.posX--;
        if (keycode === 'ArrowDown' && player.x) player.posX++;
        if (keycode === 'ArrowLeft' && player.y ) player.posY--;
        if (keycode === 'ArrowRight' && player.y) player.posY++;

        console.log(keycode, player);

        const celulas = document.querySelectorAll('.cell');
        

        celulas[K].append(element);
    }
    function movePlayer(player){
        const K = player * 4 + player;
        console.log(celulas);
    }
    function verifyPosition() {

    }
})
