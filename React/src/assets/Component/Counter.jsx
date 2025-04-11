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





















// 2. Todo List
// Problem: Build a simple todo list with the ability to add and delete items.

// Concepts Tested:

// List rendering (.map)
// useState
// Event handling




// import React, { useState } from 'react';

// function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleAddTodo = () => {
//     if (inputValue.trim() !== '') {
//       setTodos([...todos, inputValue]);
//       setInputValue('');
//     }
//   };

//   const handleDelete = (index) => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <input
//         type='text'
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <button type='button' onClick={handleAddTodo}>Add Todo</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo}
//             <button type='button' onClick={() => handleDelete(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;
