const DIST_SALTO = 66;
const MARGIN_FIX = 4;

function Piece(posX, posY) {
    this.x = posX;
    this.y = posY;
    this.nextPosition = function (keycode) {
        let { x, y } = this;

        if (keycode === 'ArrowUp') x--;
        if (keycode === 'ArrowDown') x++;
        if (keycode === 'ArrowLeft') y--;
        if (keycode === 'ArrowRight') y++;

        if (keycode === 'KeyW') x--;
        if (keycode === 'KeyS') x++;
        if (keycode === 'KeyA') y--;
        if (keycode === 'KeyD') y++;

        console.log(keycode, player);
        return { x, y };
    }

    this.moveTo = function (position) {
        this.x = position.x;
        this.y = position.y;

        this.updateElementPosition();
    }

    this.insertElementInto = function (className, parent) {
        this.element = createGameElement('div', className, parent);

        this.updateElementPosition();
    }

    this.updateElementPosition = function (){
        this.element.style.top = calculaPosicao(this.x);
        this.element.style.left = calculaPosicao(this.y);
    }

    function calculaPosicao(qtd) {
        return qtd * DIST_SALTO + MARGIN_FIX + "px";
    }
}