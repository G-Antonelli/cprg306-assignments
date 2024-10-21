  
export default function Item({itemObj}){
    const { name, quantity, category} = itemObj;
    return(
        <div className= "flex flex-col border-8 border-black bg-gray-100 mt-5 m-2.5 px-2.5 py-4 w-1/2 shadow-lg">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-xl">Buy {quantity} in {category}</p>
        </div>
    );
}