import { Component } from "react";

export class ClassTrafficLight extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({count: this.state.count + 1});
    if (this.state.count >= 2) {
      this.setState({count: 0});
    }
  }

  render() {
    let redLight = 'black';
    let yellowLight = 'black';
    let greenLight = 'black';
    if (this.state.count == 0) {
      redLight = 'red';
    } else if (this.state.count == 1) {
      greenLight = 'green';
    } else {
      yellowLight = 'yellow';
    }

    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div className={`circle ${redLight}`}></div>
          <div className={`circle ${yellowLight}`}></div>
          <div className={`circle ${greenLight}`}></div>
        </div>
        <button className="next-state-button" onClick={this.increment}>Next State</button>
      </div>
    );
  }
}
