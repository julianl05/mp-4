"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Home() {
  const [name, setName] = useState<string>("");
  const router = useRouter();
  
  function handleClick(name: string) {
    if (name === "") {
      console.log("Please enter a name");
      return;
    }
    router.push(`/${name}`);
  };
  
  return (
    <div>
      <div className="flex flex-col items-center justify-center rounded-3xl w-[40vw] my-[15vh] px-[2vw] py-[5vh] justify-self-center bg-[#31363F] text-center shadow-lg">
        <h1 className="text-[calc(3px+2vw)] w-[80%]">Superhero Statblock Generator</h1>
        <h3 className="text-[calc(3px+1vw)] my-4">Enter the name of a superhero to get their powerstats</h3>
        <input 
          type="text"
          value={name}
          placeholder="e.g. batman, wonder woman"
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-[0.5vw] my-[2vh] w-[85%] text-[calc(5px+1vw)]"
        />
        <button onClick={() => handleClick(name)} className="text-[calc(8px+1vw)] w-[85%] bg-[#76ABAE] color-[#222831] p-[1vw] rounded-2xl hover:bg-gray-500 hover:cursor-pointer active:bg-gray-600">Search</button>
      </div>
    </div>
  );
}
