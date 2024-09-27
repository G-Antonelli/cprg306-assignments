import Item from "./item";
import ItemList from "./item-list";

let items = ItemList();

export default function PropsPage(){
    
    return(
        <main className="bg-gradient-to-l from-teal-100 to-teal-300">
            <h1 className="px-2 py-4 text-4xl font-bold">Shopping List</h1>
            {items.map((item, index) => (
                <Item 
                    key={index}
                    itemObj={item}
                />
            ))}
        </main>
    );   
}