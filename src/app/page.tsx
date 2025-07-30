'use client';
import { mockCharacters } from "./mocks/mocks";




export default function Home() {
  return (
   <main>
    <h1>Ricky & Morty</h1>
    <div>
     {mockCharacters.map((char) =>(

      <div
       key={char.id}
       className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <h2>{}</h2>
      </div>
      
     ))}
    </div>

    <div>

    </div>

   </main>
  );
}
