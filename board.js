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

function buildGameBoard(linhas, celulas) {
    const positionPieces = {}

    const game = document.getElementById('game');

    const board = createGameElement('div', 'board', game);

    for (let k = 0; k < linhas; k++) {
        const linha = createGameElement('div', 'row', board);

        for (let i = 0; i < celulas; i++) {
            const celula = createGameElement('div', 'cell', linha);
            const char = boardMap[k][i];

            if (char === '#') celula.classList.add('wall');
            if (char === 'B') celula.classList.add('block');
            if (char === 'G') celula.classList.add('goal');
            if (char === 'P') positionPieces.player = { x: k, y: i };
        }
    }

    return positionPieces;
}