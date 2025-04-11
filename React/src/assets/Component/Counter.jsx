// 1. Counter Component
// Problem: Create a counter component with increment, decrement, and reset buttons.

// Concepts Tested:

// useState
// Basic event handling



import React, { useState } from 'react';

function counter(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <h1> count : {count}</h1>
            <button type='button' onClick={()=>setCount(count+1)}> increment </button>
            <button type='button' onClick={()=>setCount(count-1)}>decrement</button>
            <button type='button' onClick={()=>setCount(0)}>reset</button>
        </div>
    )
}
export default counter;