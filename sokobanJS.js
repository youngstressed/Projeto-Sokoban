function builGameBoard(linhas, celulas){
    const game = document.getElementById('game');
    const board = document.createElement('div');
    board.classList.add('board');

    for(let k = 0; k < linhas; k++){
        const linha = document.createElement('div');
        linha.classList.add('row');
        board.append(linha);

        for(let i = 0; i < celulas; i++) {
            const celula = document.createElement('div');
            celula.classList.add('cell');
            linha.append(celula);
        }
    } 
    game.append(board);
}
builGameBoard(8,8);



     //  if(k > 0 && k < 7 && i > 0 && i < 7 ){
            //   celula.classList.add('remove');
            // }
            // if (k == i) {
            //     celula.classList.add('remove')
            // }
            // if (k + i == linhas -1) {
            //     celula.classList.add('remove')
            // }
            // if (k == i || k + i == linhas -1) {
            //     celula.classList.add('remove')
            // }