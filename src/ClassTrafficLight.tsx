import { Component } from "react";

const trafficLightColors = [
  ['red',   'black',  'black'],
  ['black', 'black',  'green'],
  ['black', 'yellow', 'black']
];

export class ClassTrafficLight extends Component {
  state = {
    count: 0
  };

  increment = () => {
    if (this.state.count >= 2) {
      this.setState({count: 0});
    } else {
      this.setState({count: this.state.count + 1});
    }
  }

  render() {
    const trafficLightState = trafficLightColors[this.state.count];

    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div className={`circle ${trafficLightState[0]}`}></div>
          <div className={`circle ${trafficLightState[1]}`}></div>
          <div className={`circle ${trafficLightState[2]}`}></div>
        </div>
        <button className="next-state-button" onClick={this.increment}>Next State</button>
      </div>
    );
  }
}
