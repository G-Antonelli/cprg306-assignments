"use client";

import { useState } from "react";

export default function NewItem() {    
    
    const [quantity, setQuantity] = useState(1); // count is the state variable, setCount is the function to update the state default value is 0 

    let btnIncrementDisable=false
    let btnDecrementDisable=false

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    if (quantity === 20) {
        btnIncrementDisable=true
    }
    if (quantity === 1) {
        btnDecrementDisable=true
    }

    return (
        <div className="bg-black min-h-screen flex justify-center items-start">
            <div className="flex flex-row items-center bg-gray-200 p-1 shadow-md mt-4" style={{ width: '150px' }}>
                <p className="mr-10 ml-1 text-sm" style={{ width: '50px'}}>{quantity}</p>
                <button onClick={decrement} className="bg-red-500 text-white text-sm font-bold w-6 h-6 rounded-md mr-1 flex items-center justify-center disabled:opacity-50" disabled={btnDecrementDisable}>-</button>
                <button onClick={increment} className="bg-blue-500 text-white text-sm font-bold w-6 h-6 rounded-md flex items-center justify-center disabled:opacity-50" disabled={btnIncrementDisable}>+</button>
            </div>
        </div>
    );
}