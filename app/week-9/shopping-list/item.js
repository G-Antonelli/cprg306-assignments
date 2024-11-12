  
export default function Item({ itemObj, onSelect }) {
    const { name, quantity, category } = itemObj;

    const handleClick = (event) => {
        event.preventDefault();
        if (onSelect) {
            // Take the text to the left of the comma or the first word only
            const cleanName = name.split(",")[0].split(" ")[0].trim();
            onSelect(cleanName);
        }
    };

    return (
        <button 
            onClick={handleClick} 
            className="flex flex-col border-8 border-black bg-gray-100 mt-5 m-2.5 px-2.5 py-4 w-1/2 shadow-lg"
        >
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-xl">Buy {quantity} in {category}</p>
        </button>
    );
}