import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

//  Instant Insanity

class Cube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faces: props.faces,
    };
  }

  rotate(trail) {
    const faces = this.state.faces.slice();
    const save = faces[trail[0]];
    for (let ii = 0; ii < trail.length - 1; ii++) {
      faces[trail[ii]] = faces[trail[ii+1]];
    }
    faces[trail[trail.length-1]] = save;
    this.setState({faces: faces});
  }

  render() {
    console.log(this.state.faces);
    return (
      <table><tbody>

      <tr><td/><td/><td>
      <button onClick={()=>this.rotate([0, 1, 2, 3])}>Up</button>
      </td><td/><td/></tr>

      <tr><td/><td/>
      <td className="face" style={{backgroundColor:this.state.faces[0]}} />
       <td/><td/></tr>

      <tr>
      <td><button onClick={()=>this.rotate([4, 1, 5, 3])}>Left</button></td>
      <td className="face" style={{backgroundColor:this.state.faces[4]}} />
      <td className="face" style={{backgroundColor:this.state.faces[1]}} />
      <td className="face" style={{backgroundColor:this.state.faces[5]}} />
      <td><button onClick={()=>this.rotate([3, 5, 1, 4])}>Right</button></td>
      </tr>

      <tr><td/><td/>
      <td className="face" style={{backgroundColor:this.state.faces[2]}} />
       <td/><td/></tr>

      <tr><td/><td/>
      <td className="face" style={{backgroundColor:this.state.faces[3]}} />
       <td/><td/></tr>

      <tr><td/><td/><td>
      <button onClick={()=>this.rotate([3, 2, 1, 0])}>Down</button>
      </td><td/><td/></tr>

      </tbody></table>
    );
  }
}


class Game extends Component {
  /*
Y BWRB Y
R YWRB R
W BWRY R
B YWRY W
  */
  render() {
    return (
      <div>
      <Cube faces={["blue", "white", "red", "blue", "yellow", "yellow"]}/>
      <Cube faces={["yellow", "white", "red", "blue", "red", "red"]}/>
      <Cube faces={["blue", "white", "red", "yellow", "white", "red"]}/>
      <Cube faces={["yellow", "white", "red", "yellow", "blue", "white"]}/>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Game/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
