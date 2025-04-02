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
        <input 
          type="text"
          value={name}
          placeholder="e.g. batman"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => handleClick(name)}>Search</button>
    </div>
  );
}
