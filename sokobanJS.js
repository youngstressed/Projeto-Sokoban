const tabuleiro = document.getElementById('board2');
 function criarlinha(linhas){
         const linha = document.createElement('div');
         linha.classList.add('row');
        for(let i=0; i<linhas; i++) {
            const celula = document.createElement('div');
            celula.classList.add('cell');
            linha.appendChild(celula);
        }
        return linha;
     }
    const numlinhas = 8;
    const numcelulas = 8;
    for(let i=0; i<numlinhas; i++){
        const linha = criarlinha(numcelulas)
        tabuleiro.append(linha);
    }
    