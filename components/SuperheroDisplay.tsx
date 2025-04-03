import { Superhero } from "@/types";

export default function SuperheroDisplay(props: {data: Superhero[]}) {
    const powerstatStyling= "m-[1vw] p-[1vw] text-[calc(3px+1vw)] bg-[#535C91] rounded-lg";
    return(
        <div className="flex flex-row justify-center items-center flex-wrap w-full">
            {props.data.map((superhero: Superhero, index: number)=>(
                <div key={index} className="flex flex-col justify-center items-center m-[1vw] p-[2vw] rounded-lg w-[55vw] bg-[#31363F] shadow-lg">
                    <h2 className="font-bold text-[calc(5px+1vw)]">{superhero.name}</h2>
                    <h3>Real Name: {superhero.biography["full-name"] != "" ? superhero.biography["full-name"] : "Unavailable"}</h3>
                    <div className="flex flex-row justify-center items-center">
                        <img className="w-[45%]" src={superhero.image.url} alt={superhero.name} />
                        <ul className="list-none p-0 m-[2vw] text-center w-[35%]">
                            <li className={powerstatStyling}>Intelligence: {superhero.powerstats.intelligence != "null" ? superhero.powerstats.intelligence : "Unavailable"}</li>
                            <li className={powerstatStyling}>Strength: {superhero.powerstats.strength != "null" ? superhero.powerstats.strength : "Unavailable"}</li>
                            <li className={powerstatStyling}>Speed: {superhero.powerstats.speed != "null" ? superhero.powerstats.speed : "Unavailable"}</li>
                            <li className={powerstatStyling}>Durability: {superhero.powerstats.durability != "null" ? superhero.powerstats.durability : "Unavailable"}</li>
                            <li className={powerstatStyling}>Power: {superhero.powerstats.power != "null" ? superhero.powerstats.power : "Unavailable"}</li>
                            <li className={powerstatStyling}>Combat: {superhero.powerstats.combat != "null" ? superhero.powerstats.combat : "Unavailable"}</li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}