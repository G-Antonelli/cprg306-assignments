'use client';

import { useState } from "react";
import Item from "./item";  
import items from "./items.json";  

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items];
  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <div>
      <div className="flex">
        <p className="text-xl font-bold py-2 px-1 mr-1">Sort by : </p>
        <button 
          className={`px-4 py-2 mr-2 border rounded ${sortBy === "name" ? "bg-blue-400 border-blue-400" : "bg-blue-200 border-blue-200"}`  }
          onClick={() => setSortBy("name")}
          style={{ width: '100px'}}
        >
          Name
        </button>
        <button 
          className={`px-4 py-2 mr-2 border rounded ${sortBy === "category" ? "bg-blue-400 border-blue-400" : "bg-blue-200 border-blue-200"}`}
          onClick={() => setSortBy("category")}
          style={{ width: '100px' }}
        >
          Category
        </button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} itemObj={item} />
        ))}
      </ul>
    </div>
  );
}