import Cube from './Cube';
import Face from './Face';
// import Row from './Row';
import Square from './Square';

const makeCube = () => {
    const colors = {
        white: new Square("white"), 
        yellow: new Square("yellow"),
        blue: new Square("blue"), 
        red: new Square("red"),
        green: new Square("green"),
        orange: new Square("orange")
    };
    const rows = {
        // white: new Row(colors.white, colors.white, colors.white),
        // yellow: new Row(colors.yellow, colors.yellow, colors.yellow),
        // blue: new Row(colors.blue, colors.blue, colors.blue),
        // red: new Row(colors.red, colors.red, colors.red),
        // green: new Row(colors.green, colors.green, colors.green),
        // orange: new Row(colors.orange, colors.orange, colors.orange),
        white: [colors.white, colors.white, colors.white],
        yellow: [colors.yellow, colors.yellow, colors.yellow],
        blue: [colors.blue, colors.blue, colors.blue],
        red: [colors.red, colors.red, colors.red],
        green: [colors.green, colors.green, colors.green],
        orange: [colors.orange, colors.orange, colors.orange],
    };
    const faces = {
        white: new Face(rows.white, rows.white, rows.white),
        yellow: new Face(rows.yellow, rows.yellow, rows.yellow),
        blue: new Face(rows.blue, rows.blue, rows.blue),
        red: new Face(rows.red, rows.red, rows.red),
        green: new Face(rows.green, rows.green, rows.green),
        orange: new Face(rows.orange, rows.orange, rows.orange),
    };
    const cube = new Cube(
        faces.white,
        faces.yellow,
        faces.blue,
        faces.red,
        faces.green,
        faces.orange
    );
    return cube;
}

export default makeCube;