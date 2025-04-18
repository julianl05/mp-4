"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getSuperheroData } from "@/lib/getSuperheroData";
import { Superhero } from "@/types";
import SuperheroDisplay from "@/components/SuperheroDisplay";

export default function ResultsPage(){
    const params = useParams();
    const [superheroData, setSuperheroData] = useState<Superhero[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getSuperheroData(params.name) 
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
            .catch((e: Error)=> {
                console.log("There was an error fetching data", e)
                setError(e.message);
            });
    },[params.name,setSuperheroData]);

    

    return(
        <>
            <h1 className="text-center text-[calc(3px+1vw)] my-[2vh]">Results for: {decodeURIComponent(String(params.name))}</h1> 
            { error ? <p className="text-center">{error}</p> : null }
            <div>
                { loading ? <p className="text-center">Loading...</p> :<SuperheroDisplay data={superheroData} />}
            </div>
        </>
    )
}