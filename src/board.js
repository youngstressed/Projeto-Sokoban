import Piece from "./piece";

export function buildGameBoard(level) {
    const boardMap = level.trim().split('\n');

    const game = document.getElementById('game');
    const board = createGameElement('div', 'board', game);
    let numberOfGoals = 0, boxes = [], player = null;

    for (let i = 0; i < boardMap.length; i++) {
        const linha = createGameElement('div', 'row', board);

        for (let k = 0; k < boardMap[k].length; k++) {
            const celula = createGameElement('div', 'cell', linha);
            const char = boardMap[k][i];
            const position = { x: k, y: i }

            if (char === '#') celula.classList.add('wall');
            if (char === 'P') player = createBoardPiece(position, 'player');
            if (char === 'B') boxes.push(createBoardPiece(position, 'box'));
            if (char === ' ') celula.classList.add('remove');
            if (char === '_') celula.classList.add('remove');
            if (char === 'G') {
                numberOfGoals++;
                celula.classList.add('goal')
            }
        }
    }

    return { boardMap, pieces: { boxes, player }, numberOfGoals };
}

export function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName)
    element.classList.add(className);
    parentNode.append(element);

    return element;
}
function createBoardPiece(piecePosition, className) {
    const board = document.querySelector('.board');
    const piece = new Piece(piecePosition.x, piecePosition.y);

    piece.insertElementInto(className, board);

    return piece;
}