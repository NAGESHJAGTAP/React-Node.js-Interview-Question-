import React, { useState } from 'react';
import './Counter.css'; 
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter-container">
      <h1>Count: {count}</h1>
      <div className="button-group">
        <button onClick={() => setCount(count + 1 )} >increment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
