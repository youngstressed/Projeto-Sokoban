export const boardMap = [
    ["#", "#", "#", "#", "#", "#", "#", "#"],
    ["#", ".", ".", ".", ".", ".", ".", "#"],
    ["#", ".", ".", ".", "#", ".", ".", "#"],
    ["#", ".", "#", "G", ".", ".", ".", "#"],
    ["#", ".", ".", "G", "B", "#", ".", "#"],
    ["#", ".", ".", "#", ".", "B", ".", "#"],
    ["#", ".", ".", "P", ".", ".", ".", "#"],
    ["#", "#", "#", "#", "#", "#", "#", "#"]
];
const NUM_ROWS = boardMap.length;
const NUM_COLS = boardMap[0].length;

export function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName)
    element.classList.add(className);
    parentNode.append(element);

    return element;
}

export function buildGameBoard() {
    const positionPieces = {}

    const game = document.getElementById('game');

    const board = createGameElement('div', 'board', game);

    for (let k = 0; k < NUM_ROWS; k++) {
        const linha = createGameElement('div', 'row', board);

        for (let i = 0; i < NUM_COLS; i++) {
            const celula = createGameElement('div', 'cell', linha);
            const char = boardMap[k][i];
            const position = {x: i , y: k};


            if (char === '#') celula.classList.add('wall');
            if (char === 'B') celula.classList.add('block');
            if (char === 'G') celula.classList.add('goal');
            if (char === 'P') positionPieces.player = position;
            if (char === 'b') positionPieces.boxes.push(position);
        }
    }

    return positionPieces;
}