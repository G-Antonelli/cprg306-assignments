"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";
import NewItem from "./new-item";
import ItemList from "./item-list";
import {getItems, addItem} from "../_services/shopping-list-service";
import MealIdeas from "./meal-idea";

export default function PropsPage() {
  const [items, setItems] = useState(null);
  const [selectedItemName, setSelectedItemName] = useState(null);
  const router = useRouter();
  const { user } = useUserAuth();

  useEffect(() => {
    const loadItems = async () => {
      try {
        const userItems = await getItems(user.uid);
        setItems(userItems);
      } catch (error) {
        console.error("Error loading items:", error);
        setItems([]);
      }
    };

    if (user) {
      loadItems();
    }
  }, [user, router]);

  const handleAddItem = async (item) => {
    try {
      const itemId = await addItem(user.uid, item);
      const newItem = {
        ...item,
        id: itemId
      };
      setItems(prevItems => [...prevItems, newItem]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleItemSelect = (cleanedName) => {
    const name = cleanedName.split(",")[0].split(" ")[0].trim();
    setSelectedItemName(name);
  };
  if (!user) {
    return null;
  }

  return (
    <main className="bg-gradient-to-l from-teal-100 to-teal-300 min-h-screen">
      <h1 className="px-2 py-4 text-4xl font-bold">Shopping List</h1>
      <div className="flex">
        <div className="">
          <NewItem onAddItem={handleAddItem} />
          <ItemList
            items={items}
            onAddItem={handleAddItem}
            onItemSelect={handleItemSelect}
          />
        </div>
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
      </div>
    </main>
  );
}
