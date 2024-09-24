buildGameBoard(10, 10, regra0);
function buildGameBoard(linhas, celulas, regras) {
    const game = document.getElementById('game');
    const board = document.createElement('div');
    const jogador = document.createElement('div');


    jogador.classList.add('player');
    board.classList.add('board');

    for (let k = 0; k < linhas; k++) {
        const linha = document.createElement('div');
        linha.classList.add('row');
        board.append(linha);

        for (let i = 0; i < celulas; i++) {
            const celula = document.createElement('div');
            celula.classList.add('cell');
            linha.append(celula);

            if (regras(linhas, celulas, k, i)) {
                celula.classList.add('remove');
            }
        }
    }

    game.append(board);
    board.append(jogador);
}
function regra0() {
}
const player = new Jogador(0, 0);
const element = document.querySelector('.player');

const dist_salto = 66;
const margin_fix = 4;

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
    return x >= 0 && x < 10 && y >= 0 && y < 10;
}

function calculaPosicao(qtd) {
    return qtd * dist_salto + margin_fix + "px";
}
