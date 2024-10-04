import { buildGameBoard } from "./board.js";
import { lvl0, lvl1, lvl2 } from "./level.js";

const { boardMap, pieces: { boxes, player }, numberOfGoals } = buildGameBoard(lvl0);

window.addEventListener("keydown", function (event) {
    event.preventDefault();

    handlePieceMovement(event.code);
});

function findBoxAtPosition(position) {

    return boxes.find((box) => box.x === position.x && box.y === position.y);
}

function handlePieceMovement(keycode) {

    const nextPlayerPosition = player.nextPosition(keycode);
    const foundBox = findBoxAtPosition(nextPlayerPosition);

    if (foundBox) {
        const nextBoxPosition = foundBox.nextPosition(keycode);
        const boxCanMove = verifyPosition(nextBoxPosition) && !findBoxAtPosition(nextBoxPosition);

        if(boxCanMove) {
            foundBox.moveTo(nextBoxPosition);
            player.moveTo(nextPlayerPosition);
            if(levelCompleted()) setTimeout(() => alert("Você venceu!"), 250);
        }
    }
    else {
        const playerCanMove = verifyPosition(nextPlayerPosition);
        if (playerCanMove){
            player.moveTo(nextPlayerPosition);
        }
    }
}

function handleKeydownEvent(keycode) {
    const next = player.nextPosition(keycode);

    if (verifyPosition(next)) {
        player.moveTo(next);
    }
}

function verifyPosition(position) {
    let { x,y } = position;
    return boardMap[y][x] != '#';
}

function levelCompleted() {
    let count = 0;

    for (const position of boxes) {
        let { x,y } = position;

        if (boardMap[y][x] === "G") count++;

    }
    return count === numberOfGoals;
}
