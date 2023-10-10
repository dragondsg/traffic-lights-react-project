import { useState } from 'react';

export const FunctionalTrafficLight = () => {
  const [count, setCount] = useState(0);

  let redLight = 'black';
  let yellowLight = 'black';
  let greenLight = 'black';
  if (count == 0) {
    redLight = 'red';
  } else if (count == 1) {
    greenLight = 'green';
  } else {
    yellowLight = 'yellow';
  }

  const increment = () => {
    setCount(count + 1);
    if (count >= 2) {
      setCount(0);
    }
  }

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={`circle ${redLight}`}></div>
        <div className={`circle ${yellowLight}`}></div>
        <div className={`circle ${greenLight}`}></div>
      </div>
      <button className="next-state-button" onClick={increment}>Next State</button>
    </div>
  );
};
