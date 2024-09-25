const boardMap = [
    ["#", "#", "#", "#", "#", "#", "#", "#"],
    ["#", ".", ".", ".", ".", ".", ".", "#"],
    ["#", ".", ".", ".", "#", ".", ".", "#"],
    ["#", ".", "#", "G", ".", ".", ".", "#"],
    ["#", ".", ".", "G", "B", "#", ".", "#"],
    ["#", ".", ".", "#", ".", "B", ".", "#"],
    ["#", ".", ".", "P", ".", ".", ".", "#"],
    ["#", "#", "#", "#", "#", "#", "#", "#"]
]

const DIST_SALTO = 66;
const MARGIN_FIX = 4;
const NUM_ROWS = boardMap.length;
const NUM_COLS = boardMap[0].length;
buildGameBoard(NUM_ROWS, NUM_COLS,);


function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName)
    element.classList.add(className);
    parentNode.append(element);

    return element;
}

function buildGameBoard(linhas, celulas, regras) {
    const game = document.getElementById('game');

    const board = createGameElement('div', 'board', game);

    for (let k = 0; k < linhas; k++) {
        const linha = createGameElement('div', 'row', board);

        for (let i = 0; i < celulas; i++) {
            const celula = createGameElement('div', 'cell', linha);
            const char = boardMap[k][i];
            const caixa = boardMap[k][i];
            const objetivo = boardMap[k][i]; 

            if (char === '#')celula.classList.add('wall');
            if (caixa === 'B')celula.classList.add('box');
            if (objetivo === 'G')celula.classList.add('goal')
        }
    }
}