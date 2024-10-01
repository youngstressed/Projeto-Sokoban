import Piece from "./piece.js";
import { buildGameBoard, boardMap } from "./board.js";

const pieces = buildGameBoard();
const board = document.querySelector('.board')

const playerPiece = createBoardPiece(pieces.player, 'player');
const boxes = [];
for (let box of pieces.boxes) {
    let piece = createBoardPiece(box, 'box');
    boxes.push(piece);
};

window.addEventListener("keydown", function (event) {
    // event.preventDefault();

    handlePieceMovement(event.code);
});
function findBoxAtPosition(position) {

    return boxes.find((box) => box.x === position.x && box.y === position.y);
}

function handlePieceMovement(keycode) {

    const next = playerPiece.nextPosition(keycode);

    const foundBox = findBoxAtPosition(next);

    if (foundBox) {

        console.log(foundBox);

    }
    else {

        if (verifyPosition(next)) {
            playerPiece.moveTo(next);
        }
    }
}
function createBoardPiece(piecePosition, className) {
    const piece = new Piece(piecePosition.x, piecePosition.y);
    piece.insertElementInto(className, board);

    return piece;

}

function handleKeyDownEvent(keycode) {
    const next = playerPiece.nextPosition(keycode);

    if (verifyPosition(next)) {
        playerPiece.moveTo(next);
    }
}

function verifyPosition(position) {
    let { x: i, y: k } = position;
    return boardMap[k][i] != '#';
}