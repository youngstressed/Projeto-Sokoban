const player = new Jogador(0, 0);
const celulas = document.querySelectorAll('.cell');
const element = document.querySelector('.player');

const dist_salto = 66;
const margin_fix =  4;

element.style.top = calculaPosicao;
element.style.left = calculaPosicao;

window.addEventListener("keydown", function (event) {
    const next = player.nextPosition(event.code);

    if (verifyPosition(next)){
    let K = next.x * 4 + next.y;
     player.moveTo(next, element, celulas[K]);
    }
});

function Jogador(posX, posY) {
    this.x = posX;
    this.y = posY;
    this.nextPosition = function (keycode) {
        let { x, y } = this;

        if (keycode === 'ArrowUp') x--;
        if (keycode === 'ArrowDown') x++;
        if (keycode === 'ArrowLeft') y--;
        if (keycode === 'ArrowRight') y++;
        console.log(keycode, player);
        return { x, y };
    }

    this.moveTo = function (position, playerelement, _parent) {
        this.x = position.x;
        this.y = position.y;
        
        element.style.top = calculaPosicao(this.x);
        element.style.left = calculaPosicao(this.y);
    }
}

function verifyPosition(position) {
    let { x, y } = position;
    return x >= 0 && x < 4 && y >= 0 && y < 4;
}

function calculaPosicao(qtd) {
    return qtd * dist_salto + margin_fix + "px";  
    
}