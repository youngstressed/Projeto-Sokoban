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
        if (keycode === 'ArrowUp') player.posX--;
        if (keycode === 'ArrowDown') player.posX++;
        if (keycode === 'ArrowLeft') player.posY--;
        if (keycode === 'ArrowRight') player.posY++;

        console.log(keycode, player);

        const celulas = document.querySelectorAll('.cell');
        const K = player.posX * 4 + player.posY;
        console.log(celulas);

        celulas[K].append(element);
    }
})
