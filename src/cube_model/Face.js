// import Row from './Row';

class Face {
    constructor(top, middle, bottom) {
        this.top = top;
        this.middle = middle;
        this.bottom = bottom;
    }

    rotate = (ccw) => {
        if (!ccw) {
            let newTop = [this.bottom[0], this.middle[0], this.top[0]];
            let newMiddle = [this.bottom[1], this.middle[1], this.top[1]];
            let newBottom = [this.bottom[2], this.middle[2], this.top[2]];
            this.top = newTop;
            this.middle = newMiddle;
            this.bottom = newBottom;
        } else {
            let newTop = [this.top[2], this.middle[2], this.bottom[2]];
            let newMiddle = [this.top[1], this.middle[1], this.bottom[1]];
            let newBottom = [this.top[0], this.middle[0], this.bottom[0]];
            this.top = newTop;
            this.middle = newMiddle;
            this.bottom = newBottom;
        }
    }

    getCol = (col) => {
        return [
            this.top[col],
            this.middle[col],
            this.bottom[col]
        ];
    }
}

export default Face;