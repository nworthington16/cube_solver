import Cube from './Cube';

const moves = {
    "U" : Cube.rotateFace('yellow', false),
    "U'": Cube.rotateFace('yellow', true),
    "D" : Cube.rotateFace('white', false),
    "D'": Cube.rotateFace('white', true),
    "R" : Cube.rotateFace('orange', false),
    "R'": Cube.rotateFace('orange', true),
    "L" : Cube.rotateFace('red', false),
    "L'": Cube.rotateFace('red', true),
    "F" : Cube.rotateFace('green', false),
    "F'": Cube.rotateFace('green', true),
    "B" : Cube.rotateFace('blue', false),
    "B'": Cube.rotateFace('blue', true)
};

export default moves;