function Jogador(posX, posY){
    this.posX = posX;
    this.posY = posY;
}
const player = new Jogador(3, 4);

const element = document.querySelector('.player');

// player.addEventListener("click", function(){
//     alert("Clicou no jogador");
// })
window.addEventListener("keydown", function(event){
    nextPosition (event.code);
})
 function nextPosition (keycode){
if (keycode === 'ArrowUp') player.posX--;
if (keycode === 'ArrowDown') player.posX++;
if (keycode === 'ArrowLeft') player.posY--;
if (keycode === 'ArrowRight') player.posY++;

console.log(keycode,player);
}