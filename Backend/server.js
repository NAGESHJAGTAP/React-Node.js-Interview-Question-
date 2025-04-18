// 1. Create a Simple Express Server
// Task:
// Set up a basic Express server that responds with "Server is running" on the root route (/).

// Concepts Tested:

// Express setup
// GET route


// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//     res.send("nagesh jagtap");
// });

// app.listen(port, (err) => {
//     if (err) {
//         console.log('Error in server');
//     } else {
//         console.log(`Server is running on port ${port}`);
//     }
// });









// 2. GET All Users (Static or From Memory)
// Task:
// Create an endpoint /users that returns a hardcoded list of user objects.

// Concepts Tested:

// GET method
// JSON response
// Basic data structure (array of objects)



// const express= require('express');
// const app=express();
// const port=3000;

// const users=[
//     {id: 1 , name:"nagesh jagtap" , age:20 , course: "full stack web developer"}, 
//     {id:2, name:"shubham jagtap" , age:20 , course: "full stack web developer"}, 
//     {id:3, name:"om mule" , age:20 , course: "full stack web developer"}
// ];

// app.get('/users', (req , res)=>{
//     res.send(users);
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// }); 










// 3. POST New User
// Task:
// Create a POST /users route to add a user to an in-memory array.

// Concepts Tested:

// POST method
// req.body parsing
// Middleware usage (e.g., express.json())



// const express =require('express');
// const app=express();
// const port=3000;

// app.use(express.json());

// let users =[
//     {id:1, name:"nagesh jagtap", age:20, state:"Maharashtra" }
// ];

// app.get('/users', (req , res)=>{
//     res.send(users);
// });


// app.post('/users', (req, res) => {
//     const newUser = req.body;
//     newUser.id = users.length + 1; 
//     users.push(newUser);
//     res.status(201).json({ message: "User added", user: newUser }); 
// });



// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });








// 4. GET User by ID
// Task:
// Create a route /users/:id that returns a user by ID.

// Concepts Tested:

// req.params usage
// Conditional logic



// const express = require('express');
// const app = express();
// const port = 3000;

// app.use(express.json());

// let users = [
//     {id :1, name:"nagesh jagtap", age:20, city:"pune" },
//     {id :2, name:"shubham jagtap", age:20, city:"mumbai" },
// ];


// app.get('/users', (req, res) => {   
//     res.send(users);
// });


// app.post('/users', (req, res) => {
//     const newUser = req.body;
//     newUser.id = users.length + 1; 
//     users.push(newUser);
//     res.status(201).json({ message: "User added", user: newUser }); 
// }   );                  

// app.get('/users/:id', (req, res) => {
//     const userId = parseInt(req.params.id, 10); 
//     const user = users.find(u => u.id === userId); 

//     if (!user) {
//         return res.status(404).json({ message: "User not found" });
//     }

//     res.json(user); 
// }   );


// app.listen(port, () => {        
//     console.log(`Server is running on http://localhost:${port}`);
// }   );        











// 5.PUT to Update Entire User
// Task:
// Use a PUT /users/:id route to fully update a user object.

// Concepts Tested:

// Full object replacement
// Status codes (e.g., 404, 200)



// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// app.use(express.json());


// const User = mongoose.model('User', new mongoose.Schema({
//   name: String,
//   email: String,
//   age: Number
// }));

// // PUT to update full user
// app.put('/users/:id', async (req, res) => {
//   const user = await User.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     { new: true, overwrite: true }
//   );
//   if (!user) return res.status(404).send('User not found');
//   res.send(user);
// });

// // Connect and start
// mongoose.connect('mongodb://localhost:27017/testdb')
//   .then(() => app.listen(3000, () => console.log('Running')))









// 6. PATCH to Partially Update a User
// Task:
// Create a PATCH /users/:id endpoint to update only selected fields.

// Concepts Tested:

// Partial update logic
// Merging existing data



// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// app.use(express.json());

// // User Schema
// const User = mongoose.model('User', new mongoose.Schema({
//   name: String, email: String, age: Number
// }));

// // PATCH route to update specific fields
// app.patch('/users/:id', async (req, res) => {
//   const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   if (!user) return res.status(404).send('User not found');
//   res.send(user);
// });

// // Start server
// mongoose.connect('mongodb://localhost/testdb')
//   .then(() => app.listen(3000, () => console.log('Server running')));














// DELETE a User
// Task:
// Create a DELETE /users/:id route to remove a user from the list.

// Concepts Tested:

// Array filtering
// Status codes (204 No Content, 404 Not Found)




const express = require('express');
const app = express();

let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).send('User not found');
  }

  users = users.filter(u => u.id !== id);
  res.status(204).send(); // No Content
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
