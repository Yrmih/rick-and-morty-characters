'use client';
import { mockCharacters } from "./mocks/mocks";

const mockCharacters: Character[] = [
   {
    id: 1,
    name: "Rick Sanchez",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    status: "Alive",
    species: "Human",
  },
]



export default function Home() {
  return (
   <main className="p-6 min-h-screen bg-zinc-950 text-white">
    <h1 className="text3xl font-bold mb-8 text-center">Ricky & Morty</h1>
    <div>
     {mockCharacters.map((char) =>(

      <div
       key={char.id}
       className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
         <img
              src={char.image}
              alt={char.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
         <h2 className="text-xl font-semibold">{char.name}</h2>
            <p className="text-sm text-zinc-400">{char.species}</p>
            <p className="text-sm"></p>
            Status: {""}

          <span
            className={
              char.status === "Alive"
                ? "text-green-400"
                : char.status === "Dead"
                ? "text-red-500"
                : "text-yellow-500"
            }
      </div>
      
     ))}
    </div>

    <div>

    </div>

   </main>
  );
}
