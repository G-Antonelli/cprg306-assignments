"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const fetchMealIdeas = async (ingredient) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || []; 
    };

    const loadMealIdeas = async () => {
        setLoading(true);
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
        setLoading(false);
    };
    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!meals.length) {
        return <p>No meals found for "{ingredient}"</p>;
    }

    return (
        <div className="mt-5">
            <h2 className="text-2xl font-bold mb-3">Meal Ideas for "{ingredient}"</h2>
            <ul className="grid gap-4 grid-cols-1">
                {meals.map((meal) => (
                    <li key={meal.idMeal} className="border rounded-lg shadow-lg p-4 bg-white">
                        <h3 className="text-xl font-semibold">{meal.strMeal}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
}