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
                    
                } else {

                }
        }
    }
}

export default Cube;