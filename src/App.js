import React, { Component } from 'react';
// import Webcam from 'react-webcam';
import makeCube from './cube_model/main';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <Webcam /> */}
                <div>
                    <button onClick={this.handleClick}>Click here</button>
                </div>
            </div>
        );
    }

    handleClick() {
        let c = makeCube();
        c.move("R U R' U' R U R' U' R U R' U'");
        console.log(c);
    }
}

export default App;
