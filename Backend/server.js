// 1. Create a Simple Express Server
// Task:
// Set up a basic Express server that responds with "Server is running" on the root route (/).

// Concepts Tested:

// Express setup
// GET route


const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("nagesh jagtap");
});

app.listen(port, (err) => {
    if (err) {
        console.log('Error in server');
    } else {
        console.log(`Server is running on port ${port}`);
    }
});
