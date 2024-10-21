'use client';
import { useState } from "react";
import NewItem from "../week-7/new-item";
import ItemList from "./item-list";
import itemData from "./items.json";

export default function PropsPage() {

  const [items, setItems] = useState(itemData);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };
  return (
    <main className="bg-gradient-to-l from-teal-100 to-teal-300 min-h-screen">
      <h1 className="px-2 py-4 text-4xl font-bold">Shopping List</h1>
      <div className="">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onAddItem={handleAddItem}/> 
      </div>
    </main>
  );
}
