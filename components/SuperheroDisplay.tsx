import { Superhero } from "@/types";
export default function SuperheroDisplay(props: {data: Superhero[]}) {
    return(
        <div>
            {props.data.map((superhero: Superhero, index: number)=>(
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
            ))}
        </div>
    )
}