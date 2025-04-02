"use client";
import { use, useEffect, useState } from "react";
import { getSuperheroData } from "@/lib/getSuperheroData";
export default function ResultsPage(){
    const [superheroData, setSuperheroData] = useState(null);
    useEffect(() => {
        getSuperheroData()
            .then((data)=>{
                    console.log("Data fetched Successfully");
                    console.log(data);
                    setSuperheroData(data);
                })
            .catch((e: Error)=>console.log("There was an error fetching data", e));
    },[]);
    return(
        <>
            <h1>Superhero Data</h1>
            <p>{JSON.stringify(superheroData, null, 2)}</p>
        </>
    )
}