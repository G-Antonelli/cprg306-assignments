"use client";

import { useState } from "react";

export default function NewItem({onAddItem}) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(Number(event.target.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let itemObject = {
            name: name,
            quantity: quantity,
            category: category,
        };
        console.log(itemObject);

        const newId= Math.random().toString(36).substring(2, 15);
        const newItem = { id: newId, name, quantity, category };

        onAddItem(newItem);
        // Reset values after submission
        setName('');
        setQuantity(1);
        setCategory('Produce');
    };


    let btnIncrementDisable = quantity === 20;
    let btnDecrementDisable = quantity === 1;

    const increment = (event) => {
        event.preventDefault();
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = (event) => {
        event.preventDefault();
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className=" flex items-start">
            <div className="flex">
                <form onSubmit={handleSubmit} className=" p-5 max-w-sm w-full">
                    <div className="text-black">
                        <input
                            className="p-2 mt-1 w-full border-r-2 rounded-lg border-gray-400  focus:bg-gray-200"
                            type="text"
                            placeholder="Item Name"
                            onChange={handleNameChange}
                            value={name}
                            id="name"
                            name="name"
                        />
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-row items-center rounded-lg border-r-2 bg-gray-200 p-1 shadow-md mt-6" style={{ width: '130px' }}>
                            <p className="mr-10 ml-1 text-lg" style={{ width: '10px' }}>{quantity}</p>
                            <button
                                onClick={decrement}
                                className="bg-red-500 text-white text-lg font-bold w-6 h-6 rounded-md mr-1 flex items-center justify-center disabled:opacity-50"
                                disabled={btnDecrementDisable}
                            >
                                -
                            </button>
                            <button
                                onClick={increment}
                                className="bg-blue-500 text-white text-lg font-bold w-6 h-6 rounded-md flex items-center justify-center disabled:opacity-50"
                                disabled={btnIncrementDisable}
                            >
                                +
                            </button>
                        </div>
                        <div className="flex flex-row items-center mt-6 ml-10 text-lg">
                            <select className="p-2 rounded-lg border-r-2 border-gray-400 bg-gray-50 focus:bg-gray-200" onChange={handleCategoryChange} value={category}>
                                <option selected disabled value="">Category</option>
                                <option value="produce">Produce</option>
                                <option value="dairy">Dairy</option>
                                <option value="bakery">Bakery</option>
                                <option value="meat">Meat</option>
                                <option value="frozenfoods">Frozen Foods</option>
                                <option value="canned">Canned Goods</option>
                                <option value="dry">Dry Goods</option>
                                <option value="beverages">Beverages</option>
                                <option value="snacks">Snacks</option>
                                <option value="household">Household</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button className="px-2 py-1 rounded-lg border-r-2 border-green-700 text-white bg-green-700 hover:bg-green-600 active:bg-green-500 w-full"  >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
