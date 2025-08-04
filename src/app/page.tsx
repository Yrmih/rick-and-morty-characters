'use client';
import Image from 'next/image';
import { useState } from 'react';
import {
  mockCharactersPage1,
  mockCharactersPage2,
  mockCharactersPage3,
  mockCharactersPage4,
  mockCharactersPage5,
  mockCharactersPage6,
  mockCharactersPage7,
  mockCharactersPage8,
} from './mocks/mockCharacters';


const allPages = [
  mockCharactersPage1,
  mockCharactersPage2,
  mockCharactersPage3,
  mockCharactersPage4,
  mockCharactersPage5,
  mockCharactersPage6,
  mockCharactersPage7,
  mockCharactersPage8,
];

export default function Home() {
  const [pageIndex, setPageIndex] = useState(0);
  const charactersToShow = allPages[pageIndex];

  const handleNextPage = () => {
    setPageIndex((prev) => (prev + 1) % allPages.length);
  }
  const handlePreviousPage = () => {
  setPageIndex((prev) =>
    (prev - 1 + allPages.length) % allPages.length
   );
  };

  return (
   <main className="p-6 min-h-screen bg-zinc-950 text-white">
    <h1 className="text-4xl font-extrabold">Multiverso Rick & Morty</h1>
    <p className="text-zinc-400 text-sm mt-2 italic">Seleção Intergaláctica de Bizarrices</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
     {charactersToShow.map((char) =>(
      <div
       key={char.id}
       className="bg-zinc-900 rounded p-4 flex flex-col items-center"
      >
        <Image
  src={char.image?.trim() ?? "/fallback.jpg"}
  alt={char.name}
  width={300}
  height={300}
/>

         <h2 className="text-xl font-semibold">{char.name}</h2>
            <p className="text-sm text-zinc-400">{char.species}</p>
            <p className="text-sm">
              Status:{" "}
              <span
                className={
                  char.status === "Alive"
                    ? "text-green-400"
                    : char.status === "Dead"
                    ? "text-red-500"
                    : "text-yellow-500"
                }
              >
                {char.status}
              </span>
            </p>
      </div>
     ))}
    </div>

    <div className='mt-8 flex justify-center gap-4'>
      <button onClick={handleNextPage} className="bg-zinc-700 text-white py-2 px-4 rounded">
          Volta aí, cientista louco!
      </button>
      <button onClick={handlePreviousPage} className="bg-zinc-700 text-white py-2 px-4 rounded">
        Próxima aberração interdimensional
      </button>
    </div>

   </main>
  );
}
