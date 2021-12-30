class Background {
    _x;
    _y;
    width;
    height;
    _src;

    constructor(x,y,width, height,src) {
        this.width = width;
        this.height = height;
        this._x = x;
        this._y = y;
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

    get src() {
        return this._src;
    }

    set src(value) {
        this._src = value;
    }

    get width() {
        return this.width;
    }

    set width(value) {
        this.width = value;
    }

    get height() {
        return this.height;
    }

    set height(value) {
        this.height = value;
    }

    showBackground(ctx) {
        let image = new Image();
        image.src = this._src;
        //image.onload = () => {
            ctx.drawImage(image,this.x,this.y, this.width, this.height);
        
    }
}