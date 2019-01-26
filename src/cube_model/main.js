import Cube from './Cube';
import Face from './Face';
// import Row from './Row';
// import Square from './Square';

const makeCube = () => {
    const cube = new Cube(
        new Face("white"),
        new Face("yellow"),
        new Face("blue"),
        new Face("red"),
        new Face("green"),
        new Face("orange")
    );
    return cube;
}

export default makeCube;