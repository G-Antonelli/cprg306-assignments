"use client";

import { useState } from "react";

export default function NewItem() {
    const [count, setCount] = useState(1); // count is the state variable, setCount is the function to update the state default value is 0
    
    let btnIncrementDisable=false
    let btnDecrementDisable=false



    const increment = () => {
        if (count < 20) {
            
            setCount(count + 1);
        }
    };
    const decrement = () => {
        if (count > 1) {
            btnDecrementDisable=false
            setCount(count - 1);
        }
    };
    if (count === 20) {
        btnIncrementDisable=true
    }
    if (count === 1) {
        btnDecrementDisable=true
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Simple Counter</h1>
            <p className="text-2xl">Count: {count}</p>
            <button onClick={increment} className="bg-blue-500 mt-4 text-white px-4 py-2 rounded-md" disabled={btnIncrementDisable}>Increment</button>
            <button onClick={decrement} className="bg-red-500 mt-4 text-white px-4 py-2 rounded-md" disabled={btnDecrementDisable}>Decrement</button>
        </div>
    );
}