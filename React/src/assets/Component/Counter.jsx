// 1. Counter Component
// Problem: Create a counter component with increment, decrement, and reset buttons.

// Concepts Tested:

// useState
// Basic event handling



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
