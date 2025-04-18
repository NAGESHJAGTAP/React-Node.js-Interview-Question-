// 1. Todo List
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














// // Todo List with Done
// function TodoListWithDone() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [doneTodos, setDoneTodos] = useState([]);

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

//   const handleMarkDone = (index) => {
//     const doneItem = todos[index];
//     setDoneTodos([...doneTodos, doneItem]);
//     handleDelete(index);
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
//       <h2>Pending Todos</h2>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo}
//             <button type='button' onClick={() => handleMarkDone(index)}>Done</button>
//             <button type='button' onClick={() => handleDelete(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <h2>Completed Todos</h2>
//       <ul>
//         {doneTodos.map((todo, index) => (
//           <li key={index}>{todo}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoListWithDone;













// // 3: Todo with useReducer


// import React, { useReducer, useState } from 'react';

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD':
//       return [...state, { text: action.payload, done: false }];
//     case 'TOGGLE':
//       return state.map((todo, i) =>
//         i === action.index ? { ...todo, done: !todo.done } : todo
//       );
//     case 'DELETE':
//       return state.filter((_, i) => i !== action.index);
//     default:
//       return state;
//   }
// };

// function TodoReducer() {
//   const [state, dispatch] = useReducer(reducer, []);
//   const [input, setInput] = useState('');

//   return (
//     <div>
//       <h2>Todo with useReducer</h2>
//       <input value={input} onChange={(e) => setInput(e.target.value)} />
//       <button onClick={() => { if (input) { dispatch({ type: 'ADD', payload: input }); setInput(''); }}}>Add</button>

//       <ul>
//         {state.map((todo, index) => (
//           <li key={index} style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
//             <input type="checkbox" checked={todo.done} onChange={() => dispatch({ type: 'TOGGLE', index })} />
//             {todo.text}
//             <button onClick={() => dispatch({ type: 'DELETE', index })}>❌</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoReducer;













// 4: Todo with LocalStorage 


// import React, { useState, useEffect } from 'react';

// function TodoWithStorage() {
//   const [todos, setTodos] = useState(() => {
//     const saved = localStorage.getItem('myTodos');
//     return saved ? JSON.parse(saved) : [];
//   });
//   const [input, setInput] = useState('');

//   useEffect(() => {
//     localStorage.setItem('myTodos', JSON.stringify(todos));
//   }, [todos]);

//   const handleAdd = () => {
//     if (input.trim() === '') return;
//     setTodos([...todos, input]);
//     setInput('');
//   };

//   const handleDelete = (index) => {
//     setTodos(todos.filter((_, i) => i !== index));
//   };

//   return (
//     <div>
//       <h2>Todo with LocalStorage</h2>
//       <input value={input} onChange={(e) => setInput(e.target.value)} />
//       <button onClick={handleAdd}>Add</button>

//       <ul>
//         {todos.map((todo, i) => (
//           <li key={i}>
//             {todo}
//             <button onClick={() => handleDelete(i)}>❌</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoWithStorage;
