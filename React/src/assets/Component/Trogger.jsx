// 3. Toggle Show/Hide
// Problem: Create a button that toggles the visibility of a text (e.g., “Hello World”).

// Concepts Tested:

// Conditional rendering
// useState



// import React, { useState } from 'react';

// function ToggleText() {
//   const [show, setShow] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setShow(!show)}>
//         {show ? 'Hide Text' : 'Show Text'}
//       </button>
//       {show && <p>Hello World</p>}
//     </div>
//   );
// }

// export default ToggleText;






// 2: Toggle with Separate Show and Hide Buttons

// import React, { useState } from 'react';

// function ToggleText() {
//   const [show, setShow] = useState(false);

//   return (
//     <div>
//       {!show && <button onClick={() => setShow(true)}>Show</button>}
//       {show && (
//         <>
//           <p>Hello World</p>
//           <button onClick={() => setShow(false)}>Hide</button>
//         </>
//       )}
//     </div>
//   );
// }

// export default ToggleText;





// 3: Toggle with Custom Text Component

// import React, { useState } from 'react';

// function Message() {
//   return <p>Hello World</p>;
// }

// function ToggleText() {
//   const [show, setShow] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setShow(!show)}>
//         {show ? 'Hide Message' : 'Show Message'}
//       </button>
//       {show && <Message />}
//     </div>
//   );
// }

// export default ToggleText;










// 4: Toggle using useReducer (Advanced/Interview)

import React, { useReducer } from 'react';

const toggleReducer = (state) => !state;

function ToggleText() {
  const [show, toggle] = useReducer(toggleReducer, false);

  return (
    <div>
      <button onClick={toggle}>
        {show ? 'Hide' : 'Show'}
      </button>
      {show && <p>Hello World</p>}
    </div>
  );
}

export default ToggleText;
