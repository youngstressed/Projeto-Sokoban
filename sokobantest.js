const DIST_SALTO = 66;
const MARGIN_FIX = 4;
const NUM_ROWS = 6;
const NUM_COLS = 6;
buildGameBoard(NUM_ROWS, NUM_COLS, regra0);

const player = new Jogador(0, 0);
const element = document.querySelector('.player');

element.style.top = calculaPosicao(0);
element.style.left = calculaPosicao(0);

window.addEventListener("keydown", function (event) {
    const next = player.nextPosition(event.code);

    if (verifyPosition(next)) {
        player.moveTo(next, element);
    }
});

function Jogador(posX, posY) {
    this.x = posX;
    this.y = posY;
    this.nextPosition = function (keycode) {
        let { x, y } = this;

        if (keycode === 'ArrowUp') x--;
        if (keycode === 'ArrowDown') x++;
        if (keycode === 'ArrowLeft') y--;
        if (keycode === 'ArrowRight') y++;

        console.log(keycode, player);
        return { x, y };
    }

    this.moveTo = function (position, element) {
        this.x = position.x;
        this.y = position.y;

        element.style.top = calculaPosicao(this.x);
        element.style.left = calculaPosicao(this.y);
    }
}

function verifyPosition(position) {
    let { x, y } = position;
    return x >= 0 && x < NUM_ROWS && y >= 0 && y < NUM_COLS;
}

function calculaPosicao(qtd) {
    return qtd * DIST_SALTO + MARGIN_FIX + "px";
}

function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName)
    element.classList.add(className);
    parentNode.append(element);

    return element;
}

function buildGameBoard(linhas, celulas, regras) {
    const game = document.getElementById('game');

    const board = createGameElement('div', 'board', game);
    const jogador = createGameElement('div','player', board);
    
    for (let k = 0; k < linhas; k++) {
        const linha = createGameElement('div','row', board);

        for (let i = 0; i < celulas; i++) {
            const celula = createGameElement('div','cell', linha);

            if (regras(linhas, celulas, k, i)) {
                celula.classList.add('remove');
            }
        }
    }
}
function regra0() {
}

// functio