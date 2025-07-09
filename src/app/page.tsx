'use client';
import { mockCharacters } from "./mocks/mocks";




export default function Home() {
  return (
   <main>
    <h1>Ricky & Morty</h1>
    <div>
     {mockCharacters.map((char) =>(

      <div>
        <h2>{}</h2>
      </div>
      
     ))}
    </div>

    <div>

    </div>

   </main>
  );
}
