"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Home() {
  const [name, setName] = useState<string>("");
  const router = useRouter();
  
  function handleClick(event: React.FormEvent) {
    event.preventDefault();
    if (name === "") {
      console.log("Please enter a name");
      return;
    }
    router.push(`/${name}`);
  };
  
  return (
    <div>
      <form onSubmit={handleClick} className="flex flex-col items-center justify-center rounded-3xl w-[40vw] my-[15vh] px-[2vw] py-[5vh] justify-self-center bg-[#31363F] text-center shadow-lg">
        <h1 className="text-[calc(3px+2vw)] w-[80%]">Superhero Statblock Generator</h1>
        <label htmlFor="name-input" className="my-4">Enter the name of a superhero to get their powerstats</label> {/* learned from docs that in react it should be htmlfor not for*/}
        <input 
          id="name-input"
          type="text"
          value={name}
          placeholder="e.g. batman, wonder woman"
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-[0.5vw] my-[2vh] w-[85%] text-[calc(5px+1vw)]"
        />
        <button type="submit" className="text-[calc(8px+1vw)] w-[85%] bg-[#76ABAE] p-[1vw] rounded-2xl hover:bg-gray-500 hover:cursor-pointer active:bg-gray-600">Search</button>
      </form>
    </div>
  );
}
