const lvl0 = `
__#####
###P..#_
#..B#.##
#.#GB..#
#..G.#.#
#..#...#
_#...###
_#####
`
function strig2BoarMap (level) {
const lines = level.trim().split('\n');
console.log(lines);

return lines;
}

export const boardMap = strig2BoarMap(lvl0);

// export const boardMap = [
//     [" ", " ", "#", "#", "#", "#", "#", " "],
//     ["#", "#", "#", ".", ".", ".", "#"],
//     ["#", ".", ".", ".", "#", ".", "#"],
//     ["#", ".", "#", ".", "G", ".", ",", "#"],
//     ["#", ".", ".", ".", "B", "#", ".", "#"],
//     ["#", ".", "G", "B", "P", ".", ".", "#"],
//     ["#", ".", ".", ".", ".", "#", "#", "#"],
//     ["#", "#", "#", "#", "#", "#",]
// ];
const NUM_ROWS = boardMap.length;

export function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName)
    element.classList.add(className);
    parentNode.append(element);
    
    return element;
}

export function buildGameBoard() {
    const pieces = {
        boxes: []
    };
    
    let numberOfGoals = 0;
    
    const game = document.getElementById('game');
    
    const board = createGameElement('div', 'board', game);
    
    for (let k = 0; k < NUM_ROWS; k++) {
        const NUM_COLS = boardMap[k].length;
        const linha = createGameElement('div', 'row', board);
        
        for (let i = 0; i < NUM_COLS; i++) {
            const celula = createGameElement('div', 'cell', linha);
            const char = boardMap[k][i];
            const position = { x: i, y: k };
            
            
            if (char === '#') celula.classList.add('wall');
            // if (char === 'B') celula.classList.add('block');
            if (char === 'G') {
                numberOfGoals++;
                celula.classList.add('goal')
            };
            if (char === 'P') pieces.player = position;
            if (char === 'B') pieces.boxes.push(position);
            if (char === ' ') celula.classList.add('remove');
            if (char === '_') celula.classList.add('remove')
        }
    }

    return { pieces, numberOfGoals};
}