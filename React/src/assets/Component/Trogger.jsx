// 3. Toggle Show/Hide
// Problem: Create a button that toggles the visibility of a text (e.g., “Hello World”).

// Concepts Tested:

// Conditional rendering
// useState



import React, { useState } from 'react';

function ToggleText() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide Text' : 'Show Text'}
      </button>
      {show && <p>Hello World</p>}
    </div>
  );
}

export default ToggleText;
