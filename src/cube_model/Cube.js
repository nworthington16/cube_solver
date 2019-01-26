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
        console.log(sequence);
        console.log(moves[sequence[0]]);
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
                    this.green_face.bottom = this.red_face.bottom;
                    this.red_face.bottom = this.blue_face.bottom;
                    this.blue_face.bottom = this.orange_face.bottom;
                    this.orange_face.bottom = temp;
                } else {
                    let temp = this.green_face.bottom;
                    this.green_face.bottom = this.orange_face.bottom;
                    this.orange_face.bottom = this.blue_face.bottom;
                    this.blue_face.bottom = this.red_face.bottom;
                    this.red_face.bottom = temp;
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
                    this.yellow_face.bottom = this.red_face.right.reverse();
                    this.red_face.right = this.white_face.top;
                    this.white_face.top = this.orange_face.left.reverse();
                    this.orange_face.left = temp;
                } else {
                    let temp = this.yellow_face.top;
                    this.yellow_face.bottom = this.orange_face.left;
                    this.orange_face.left = this.white_face.top.reverse();
                    this.white_face.top = this.red_face.right ;
                    this.red_face.right = temp.reverse();
                }
                break;
            case 'blue':
                this.blue_face.rotate(ccw);
                if (!ccw) {
                    let temp = this.yellow_face.top;
                    this.yellow_face.top = this.orange_face.right;
                    this.orange_face.right = this.white_face.bottom.reverse();
                    this.white_face.bottom = this.red_face.left;
                    this.red_face.left = temp.reverse();
                } else {
                    let temp = this.yellow_face.top;
                    this.yellow_face.top = this.red_face.left.reverse();
                    this.red_face.left = this.white_face.bottom;
                    this.white_face.bottom = this.orange_face.right.reverse();
                    this.orange_face.right = temp;
                }
                break;
            case 'red':
                this.red_face.rotate(ccw);
                if (!ccw) {
                    let temp = this.yellow_face.left;
                    this.yellow_face.left = this.blue_face.right.reverse();
                    this.blue_face.right = this.white_face.left.reverse();
                    this.white_face.left = this.green_face.left;
                    this.green_face.left = temp;
                } else {
                    let temp = this.yellow_face.left;
                    this.yellow_face.left = this.green_face.left;
                    this.green_face.left = this.white_face.left;
                    this.white_face.left = this.blue_face.right.reverse();
                    this.blue_face.right = temp.reverse();
                }
                break;
            case 'orange':
                this.orange_face.rotate(ccw);
                if (!ccw) {
                    let temp = this.yellow_face.right;
                    this.yellow_face.right = this.green_face.right;
                    this.green_face.right = this.white_face.right;
                    this.white_face.right = this.blue_face.left.reverse();
                    this.blue_face.left = temp.reverse();
                } else {
                    let temp = this.yellow_face.right;
                    this.yellow_face.right = this.blue_face.left.reverse();
                    this.blue_face.left = this.white_face.right.reverse();
                    this.white_face.right = this.green_face.right;
                    this.green_face.right = temp;
                }
                break;
        }
    }
}

export default Cube;