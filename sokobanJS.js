buildGameBoard(8, 8, regra1);
buildGameBoard(8, 8, regra2);
buildGameBoard(8, 8, regra3);
buildGameBoard(8, 8, regra4);

function buildGameBoard(linhas, celulas, regras) {
    const game = document.getElementById('game');
    const board = document.createElement('div');
    board.classList.add('board');

    for (let k = 0; k < linhas; k++) {
        const linha = document.createElement('div');
        linha.classList.add('row');
        board.append(linha);

        for (let i = 0; i < celulas; i++) {
            const celula = document.createElement('div');
            celula.classList.add('cell');
            linha.append(celula);

            if (regras(celula, linhas, celulas, k, i)){
                celula.classList.add('remove');
            }
        }
    }

    game.append(board);
}
    

    function regra1(celula, linhas, celulas, k, i) {
       return k > 0 && k < 7 && i > 0 && i < 7; 
    }

    function regra2(celula, linhas, celulas, k, i) {
        return k == i;
        }

    function regra3(celula, linhas, celulas, k, i) {
        return k + i == linhas - 1;
    }

    function regra4(celula, linhas, celulas, k, i) {
        return k == i || k + i == linhas - 1;
    }

    function regra5(celula, linhas, celulas, k, i) {
        return k == i;
    }
  