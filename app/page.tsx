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
    <div className="">
      <div className="flex flex-col items-center justify-center">
        <input 
          type="text"
          value={name}
          placeholder="e.g. batman"
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 mb-4 max-w-xs"
        />
        <button onClick={() => handleClick(name)}>Search</button>
      </div>
    </div>
  );
}
