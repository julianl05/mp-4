"use client";
import { use, useEffect, useState } from "react";
import { getSuperheroData } from "@/lib/getSuperheroData";
import { Superhero } from "@/types";
export default function ResultsPage(){
    const [superheroData, setSuperheroData] = useState<Superhero[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        getSuperheroData()
            .then((data)=>{
                    console.log("Data fetched Successfully");
                    console.log(data);
                    if (data.response === "error") {
                        setError(data.error);
                    } else {
                        setSuperheroData(data.results);
                    }
                    setLoading(false);
                })
            .catch((e: Error)=>console.log("There was an error fetching data", e));
    },[setSuperheroData]);

    if (error) {
        return <p>{error}</p>;
    }

    return(
        <>
            <h1>Superhero Data</h1>
            <h2>Results for:</h2>
            <div>
                { loading ? <p>Loading...</p> :
                    superheroData.map((superhero, index)=>(
                        <div key={index}>
                            <h2>{superhero.name}</h2>
                            <img src={superhero.image.url} alt={superhero.name} />
                            <h3>Powerstats</h3>
                            <ul>
                                <li>Intelligence: {superhero.powerstats.intelligence}</li>
                                <li>Strength: {superhero.powerstats.strength}</li>
                                <li>Speed: {superhero.powerstats.speed}</li>
                                <li>Durability: {superhero.powerstats.durability}</li>
                                <li>Power: {superhero.powerstats.power}</li>
                                <li>Combat: {superhero.powerstats.combat}</li>
                            </ul>
                        </div>
                    ))
                }
            </div>
        </>
    )
}