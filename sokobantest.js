const NUM_ROWS = boardMap.length;
const NUM_COLS = boardMap[0].length;

const DIST_SALTO = 66;
const MARGIN_FIX = 4;

const pieces = buildGameBoard(NUM_ROWS, NUM_COLS);
const board = document.querySelector('.board')

const playerElement = createGameElement('div', 'player', board);
const player = new Piece(pieces.player.x, pieces.player.y);

playerElement.style.top = calculaPosicao(player.x);
playerElement.style.left = calculaPosicao(player.y);

window.addEventListener("keydown", function (event) {
    const next = player.nextPosition(event.code);

    if (verifyPosition(next)) {
        player.moveTo(next, playerElement);
    }
    });
    
function calculaPosicao(qtd) {
    return qtd * DIST_SALTO + MARGIN_FIX + "px";
}