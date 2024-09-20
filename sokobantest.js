window.addEventListener("keydown", function (event) {
    const next = nextPosition(event.code);

    if (verifyPosition(next)) movePlayer(next);

})
function Jogador(posX, posY) {
    this.x = posX;
    this.y = posY;
}
const player = new Jogador(0, 0);
const celulas = document.querySelectorAll('.cell');
const element = document.querySelector('.player');

function nextPosition(keycode) {
    let { x, y } = player;

    if (keycode === 'ArrowUp') x--;
    if (keycode === 'ArrowDown') x++;
    if (keycode === 'ArrowLeft') y--;
    if (keycode === 'ArrowRight') y++;
    console.log(keycode, player);
    return { x, y };
}

function movePlayer(position) {
    let { x, y } = position;
    player.x = x;
    player.y = y;
    const K = x * 4 + y;
    celulas[K].append(element);
}

function verifyPosition(position) {
    let { x, y } = position;
    return x >= 0 && x < 4 && y >= 0 && y < 4;
}
