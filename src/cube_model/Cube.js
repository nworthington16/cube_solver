const moves = {
    "U" : ['yellow', false],
    "U'": ['yellow', true],
    "D" : ['white', false],
    "D'": ['white', true],
    "R" : ['orange', false],
    "R'": ['orange', true],
    "L" : ['red', false],
    "L'": ['red', true],
    "F" : ['green', false],
    "F'": ['green', true],
    "B" : ['blue', false],
    "B'": ['blue', true]
};

/*
         yellow
    red  green  orange  blue
         white
*/

class Cube {
    constructor(white, yellow, blue, red, green, orange) {
        this.white_face = white;
        this.yellow_face = yellow;
        this.blue_face = blue;
        this.red_face = red;
        this.green_face = green;
        this.orange_face = orange;
    }

    move(sequence) {
        sequence = sequence.split(' ');
        // console.log(sequence);
        // console.log(moves[sequence[0]]);
        // console.log(moves[sequence[1]]);
        // console.log(this);
        for (let i = 0; i < sequence.length; i++) {
            this.rotateFace(moves[sequence[i]][0], moves[sequence[i]][1]);
        }
    }

    rotateFace(face, ccw) {
        switch(face) {
            case 'white':
                this.white_face.rotate(ccw);
                if (!ccw) {
                    let temp = this.green_face.bottom;
                    this.green_face.bottom = this.orange_face.bottom;
                    this.orange_face.bottom = this.blue_face.bottom;
                    this.blue_face.bottom = this.red_face.bottom;
                    this.red_face.bottom = temp;
                } else {
                    let temp = this.green_face.bottom;
                    this.green_face.bottom = this.red_face.bottom;
                    this.red_face.bottom = this.blue_face.bottom;
                    this.blue_face.bottom = this.orange_face.bottom;
                    this.orange_face.bottom = temp;
                }
                break;
            case 'yellow':
                this.yellow_face.rotate(ccw);
                if (!ccw) {
                    let temp = this.green_face.top;
                    this.green_face.top = this.orange_face.top;
                    this.orange_face.top = this.blue_face.top;
                    this.blue_face.top = this.red_face.top;
                    this.red_face.top = temp;
                } else {
                    let temp = this.green_face.top;
                    this.green_face.top = this.red_face.top;
                    this.red_face.top = this.blue_face.top;
                    this.blue_face.top = this.orange_face.top;
                    this.orange_face.top = temp;
                }
                break;
            case 'green':
                this.green_face.rotate(ccw);
                if (!ccw) {
                    let temp = this.yellow_face.bottom; 
                    this.yellow_face.bottom = this.red_face.getCol(2).reverse();
                    this.red_face.setCol(2, this.white_face.top);
                    this.white_face.top = this.orange_face.getCol(0).reverse();
                    this.orange_face.setCol(0, temp);
                } else {
                    let temp = this.yellow_face.top;
                    this.yellow_face.bottom = this.orange_face.getCol(0);
                    this.orange_face.setCol(0, this.white_face.top.reverse());
                    this.white_face.top = this.red_face.getCol(2);
                    this.red_face.setCol(2, temp.reverse());
                }
                break;
            case 'blue':
                this.blue_face.rotate(ccw);
                if (!ccw) {
                    let temp = this.yellow_face.top;
                    this.yellow_face.top = this.orange_face.getCol(2);
                    this.orange_face.setCol(2, this.white_face.bottom.reverse());
                    this.white_face.bottom = this.red_face.getCol(0);
                    this.red_face.setCol(0, temp.reverse());
                } else {
                    let temp = this.yellow_face.top;
                    this.yellow_face.top = this.red_face.getCol(0).reverse();
                    this.red_face.setCol(0, this.white_face.bottom);
                    this.white_face.bottom = this.orange_face.getCol(2).reverse();
                    this.orange_face.setCol(2, temp);
                }
                break;
            case 'red':
                this.red_face.rotate(ccw);
                if (!ccw) {
                    let temp = this.yellow_face.getCol(0);
                    this.yellow_face.setCol(0, this.blue_face.getCol(2).reverse());
                    this.blue_face.setCol(0, this.white_face.getCol(0).reverse());
                    this.white_face.setCol(0, this.green_face.getCol(0));
                    this.green_face.setCol(0, temp);
                } else {
                    let temp = this.yellow_face.getCol(0);
                    this.yellow_face.setCol(0, this.green_face.getCol(0));
                    this.green_face.setCol(0, this.white_face.getCol(0));
                    this.white_face.setCol(0, this.blue_face.getCol(2).reverse());
                    this.blue_face.setCol(2, temp.reverse());
                }
                break;
            case 'orange':
                this.orange_face.rotate(ccw);
                if (!ccw) {
                    let temp = this.yellow_face.getCol(2);
                    this.yellow_face.setCol(2, this.green_face.getCol(2));
                    this.green_face.setCol(2, this.white_face.getCol(2));
                    this.white_face.setCol(2, this.blue_face.getCol(0).reverse());
                    this.blue_face.setCol(0, temp.reverse());
                } else {
                    let temp = this.yellow_face.getCol(2);
                    this.yellow_face.setCol(2, this.blue_face.getCol(0).reverse());
                    this.blue_face.setCol(0, this.white_face.getCol(2).reverse());
                    this.white_face.setCol(2, this.green_face.getCol(2));
                    this.green_face.setCol(2, temp);
                }
                break;
        }
    }
}

export default Cube;