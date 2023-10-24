import { useState } from 'react';

const trafficLightColors = [
  ['red',   'black',  'black'],
  ['black', 'black',  'green'],
  ['black', 'yellow', 'black']
];

export const FunctionalTrafficLight = () => {
  const [count, setCount] = useState(0);

  const trafficLightState = trafficLightColors[count];

  const increment = () => {
    if (count >= 2) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={`circle ${trafficLightState[0]}`}></div>
        <div className={`circle ${trafficLightState[1]}`}></div>
        <div className={`circle ${trafficLightState[2]}`}></div>
      </div>
      <button className="next-state-button" onClick={increment}>Next State</button>
    </div>
  );
};
