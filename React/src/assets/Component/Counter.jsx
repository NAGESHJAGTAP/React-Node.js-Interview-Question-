import React, { useState } from 'react';

// 1. Counter Component
// Problem: Create a counter component with increment, decrement, and reset buttons.

// Concepts Tested:

// useState
// Basic event handling




// 1. Basic Counter with useState

// import React, { useState } from 'react';

// function counter(){
//     const [count, setCount] = useState(0);

//     return(
//         <div>
//             <h1> count : {count}</h1>
//             <button type='button' onClick={()=>setCount(count+1)}> increment </button>
//             <button type='button' onClick={()=>setCount(count-1)}>decrement</button>
//             <button type='button' onClick={()=>setCount(0)}>reset</button>
//         </div>
//     )
// }
// export default counter;






//  2. Counter with useReducer

// import React, { useReducer } from 'react';

// const reduser = (state, action) => {
//     switch (action.type) {
//         case 'increment':
//             return { count: state.count + 1 };
//         case 'decrement':
//             return { count: state.count - 1 };
//         case 'reset':
//             return { count: 0 };
//         default:
//             return state;
//     }
// };

// function Counter(){
//     const [state, dispatch] = useReducer(reduser, { count: 0 });

//     return(
//         <div>
//             <h1> count : {state.count}</h1>
//             <button type='button' onClick={()=>dispatch({type:'increment'})}> increment </button>
//             <button type='button' onClick={()=>dispatch({type:'decrement'})}>decrement</button>
//             <button type='button' onClick={()=>dispatch({type:'reset'})}>reset</button>
//         </div>
//     )   
// }
// export default Counter;








// 3. Counter with Limit (Min 0, Max 10)

// import React, { useState } from 'react';
// function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)} disabled={count >= 10}>Increment</button>
//       <button onClick={() => setCount(count - 1)} disabled={count <= 0}>Decrement</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   );
// }
// export default Counter;







// Counter with Limit (Min -10, Max 10)
// import React, { useState } from 'react';

// function Counter(){
// const [count , setCount] = useState(0);

// return(
//     <>
//     <h1> count : {count}</h1>
//     <button type='button' onClick={()=>setCount(count+1)} disabled={count>=10}>Increment</button>
//     <button type='button' onClick={()=>setCount(count-1)} disabled={count<= -10}>Decrement</button>
//     <button type='button' onClick={()=>setCount(0)}>reset</button>
//     </>
// )
// }

// export default Counter;







//4.  Counter with useEffect
// import React, { useState, useEffect } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Count updated:", count);
//   }, [count]);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   );
// }
// export default Counter;











// 5. Reusable Counter Component (with props)


// import React, { useState } from 'react';

// function Counter({ min = 0, max = 10 }) {
//   const [count, setCount] = useState(min);

//   const handleIncrement = () => {
//     if (count < max) setCount(count + 1);
//   };

//   const handleDecrement = () => {
//     if (count > min) setCount(count - 1);
//   };

//   const handleReset = () => setCount(min);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={handleIncrement} disabled={count >= max}>increment</button>
//       <button onClick={handleDecrement} disabled={count <= min}>decrement</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// }

// export default Counter;
