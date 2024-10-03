import Piece from "./piece.js";
import { buildGameBoard} from "./board.js";

const { boardMap, pieces, numberOfGoals } = buildGameBoard();
const board = document.querySelector('.board');

const player = createBoardPiece(pieces.player, 'player')
const boxes = [];

for (let b = 0; b < pieces.boxes.length; b++) {
    boxes.push(createBoardPiece(pieces.boxes[b], 'box'));
}

window.addEventListener("keydown", function (event) {
    event.preventDefault();

    handlePieceMovement(event.code);
});

// console.log(pieces.boxes);


function findBoxAtPosition(position) {

    return boxes.find((box) => box.x === position.x && box.y === position.y);
}


function handlePieceMovement(keycode) {

    const nextPlayerPosition = player.nextPosition(keycode);
    const foundBox = findBoxAtPosition(nextPlayerPosition);

    if (foundBox) {
        const nextBoxPosition = foundBox.nextPosition(keycode);
        const boxCanMove = verifyPosition(nextBoxPosition) && !findBoxAtPosition(nextBoxPosition);

        if (boxCanMove) {
            foundBox.moveTo(nextBoxPosition);
            player.moveTo(nextPlayerPosition);

            const caixasCertas = contagemDeCaixasCorretas();

            console.log(caixasCertas);

            if (caixasCertas == numberOfGoals) {
                setTimeout(levantaPlaquinha, 200);
            }
        }
    }
    else {
        const playerCanMove = verifyPosition(nextPlayerPosition);

        if (playerCanMove) {
            player.moveTo(nextPlayerPosition);
        }
    }
}

function createBoardPiece(piecePosition, className) {
    const piece = new Piece(piecePosition.x, piecePosition.y);
    piece.insertElementInto(className, board)

    return piece;
}

function handleKeydownEvent(keycode) {
    const next = player.nextPosition(keycode);

    if (verifyPosition(next)) {
        player.moveTo(next);
    }
}

function verifyPosition(position) {
    let { x: i, y: k } = position;
    return boardMap[k][i] != '#';
}

function contagemDeCaixasCorretas() {
    let count = 0;

    for (const position of boxes) {
        let { x: i, y: k } = position;

        // console.log(i, k);
        if (boardMap[k][i] === "G") count++;

    }
    return count;
}

function levantaPlaquinha() {
    alert('Você Venceu!');
}
