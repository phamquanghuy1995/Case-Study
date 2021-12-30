class Gio {
    _x;
    _y;
    _width;
    _height;
    _speed;
    _src;

    constructor(x, y, width, height, speed, src) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._speed = speed;
        this._src = src;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    get speed() {
        return this._speed;
    }

    set speed(value) {
        this._speed = value
    }

    get src() {
        return this._src;
    }

    set src(value) {
        this._src = value;
    }

    moveLeft() {
        this._x = this._x - this.speed;
    }

    moveRight() {
        this._x = this._x + this.speed;
    }

    moveUp() {
        this._y = this._y - this.speed;
    }

    moveDown() {
        this._y = this._y + this.speed;
    }


    showGio(ctx) {
        let image = new Image();
        image.src = this.src;
        //image.onload = ()=>{
            ctx.drawImage(image, this._x, this._y, this._width, this._height);


    }
}