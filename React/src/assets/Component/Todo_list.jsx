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














// Todo List with Done
function TodoListWithDone() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [doneTodos, setDoneTodos] = useState([]);

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleMarkDone = (index) => {
    const doneItem = todos[index];
    setDoneTodos([...doneTodos, doneItem]);
    handleDelete(index);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type='button' onClick={handleAddTodo}>Add Todo</button>
      <h2>Pending Todos</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button type='button' onClick={() => handleMarkDone(index)}>Done</button>
            <button type='button' onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Completed Todos</h2>
      <ul>
        {doneTodos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListWithDone;


