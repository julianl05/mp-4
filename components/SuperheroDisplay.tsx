import { Superhero } from "@/types";
// import styled from "styled-components";

// const AllSuperheroesDiv = styled.div`
//     display: flex;
//     flex-direction: row;
//     flex-wrap: wrap;
//     justify-content: center;
//     align-items: center;
// `;

// const SingleSuperheroDiv = styled.div`
//     border: 1px solid black;
//     margin: 10px;
//     padding: 10px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     width:30vw;
//     img {
//         width: 40%;
//     }
// `;

// const SideBySideDiv = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
// `;

// const PowerstatsList = styled.ul`
//     list-style-type: none;
//     padding: 0;
//     margin: 2vw;
//     li {
//         margin: 1vw;
//     }
// `;


export default function SuperheroDisplay(props: {data: Superhero[]}) {
    const powerstatStyling= "m-[1vw]"
    return(
        <div className="flex flex-row justify-center items-center flex-wrap w-full">
            {props.data.map((superhero: Superhero, index: number)=>(
                <div key={index} className="flex flex-col justify-center items-center m-[1vw] p-[2vw] rounded-lg w-[35vw] bg-[#f0f0f0] shadow-lg">
                    <h2 className="font-bold text-[calc(5px+1vw)]">{superhero.name}</h2>
                    <h3>Real Name: {superhero.biography["full-name"]}</h3>
                    <div className="flex flex-row justify-center items-center">
                        <img className="w-[40%]" src={superhero.image.url} alt={superhero.name} />
                        <ul className="list-none p-0 m-[2vw] text-center">
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