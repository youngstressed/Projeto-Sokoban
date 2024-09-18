let x = 3;
let y = 4;
const player = document.querySelector('.player');
console.log(player);

player.addEventListener("click", function(){
    alert("Clicou no jogador");
})
window.addEventListener("keydown", function(event){
//    alert("Pressionou Tecla");
console.log(event);

if (event.code === 'ArrowUp') x--;
if (event.code === 'ArrowDown') x++;
if (event.code === 'ArrowLeft') y--;
if (event.code === 'ArrowRight') y++;

console.log(event.code, x , y);
})