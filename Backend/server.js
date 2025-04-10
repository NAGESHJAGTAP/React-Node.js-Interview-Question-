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



const express= require('express');
const app=express();
const port=3000;

const users=[
    {id: 1 , name:"nagesh jagtap" , age:20 , course: "full stack web developer"}, 
    {id:2, name:"shubham jagtap" , age:20 , course: "full stack web developer"}, 
    {id:3, name:"om mule" , age:20 , course: "full stack web developer"}
];

app.get('/users', (req , res)=>{
    res.send(users);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});   