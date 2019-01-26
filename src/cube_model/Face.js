import Square from "./Square";

// import Row from './Row';

class Face {
    constructor(color) {
        // this.matrix = [
        //     [new Square(color), new Square(color), new Square(color)],
        //     [new Square(color), new Square(color), new Square(color)],
        //     [new Square(color), new Square(color), new Square(color)]
        // ];
        this.matrix = [
            [color, color, color],
            [color, color, color],
            [color, color, color]
        ];
    }

    rotate = (ccw) => {
        if (!ccw) {
            let result = [];
            for (let i = 0; i < this.matrix[0].length; i++) {
                let row = this.matrix.map(e => e[i]).reverse();
                result.push(row);
            }
            this.matrix = result;
        } else {
            let result = [];
            for (let i = 0; i < this.matrix[0].length; i++) {
                let row = this.matrix.map(e => e[i]);
                result.push(row);
            }
            this.matrix = result.reverse();
        }
    }

    get top() {
        return this.matrix[0];
    }

    get middle() {
        return this.matrix[1];
    }

    get bottom() {
        return this.matrix[2];
    }

    set top(row) {
        this.matrix[0] = row;
    }

    set middle(row) {
        this.matrix[1] = row;
    }

    set bottom(row) {
        this.matrix[2] = row;
    }

    get left() {
        return [
            this.matrix[0][0],
            this.matrix[1][0],
            this.matrix[2][0]
        ];
    }

    get center() {
        return [
            this.matrix[0][1],
            this.matrix[1][1],
            this.matrix[2][1]
        ];
    }

    get right() {
        return [
            this.matrix[0][2],
            this.matrix[1][2],
            this.matrix[2][2]
        ];
    }

    set left(col) {
        this.matrix[0][0] = col[0];
        this.matrix[1][0] = col[1];
        this.matrix[2][0] = col[2];
    }

    set center(col) {
        this.matrix[0][1] = col[0];
        this.matrix[1][1] = col[1];
        this.matrix[2][1] = col[2];
    }

    set right(col) {
        this.matrix[0][2] = col[0];
        this.matrix[1][2] = col[1];
        this.matrix[2][2] = col[2];
    }
}

export default Face;