import ItemList from "./item-list";

export default function PropsPage() {
  return (
    <main className="bg-gradient-to-l from-teal-100 to-teal-300 min-h-screen">
      <h1 className="px-2 py-4 text-4xl font-bold">Shopping List</h1>
      <div className="">
        <ItemList /> 
      </div>
    </main>
  );
}
