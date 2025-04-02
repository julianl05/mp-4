import { Superhero } from "@/types";
import styled from "styled-components";

const AllSuperheroesDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const SingleSuperheroDiv = styled.div`
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:30vw;
    img {
        width: 40%;
    }
`;

const SideBySideDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const PowerstatsList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 2vw;
    li {
        margin: 1vw;
    }
`;


export default function SuperheroDisplay(props: {data: Superhero[]}) {
    return(
        <AllSuperheroesDiv>
            {props.data.map((superhero: Superhero, index: number)=>(
                <SingleSuperheroDiv key={index}>
                    <h2>{superhero.name}</h2>
                    <SideBySideDiv>
                        <img src={superhero.image.url} alt={superhero.name} />
                        <PowerstatsList>
                            <li>Intelligence: {superhero.powerstats.intelligence != "null" ? superhero.powerstats.intelligence : "Unavailable"}</li>
                            <li>Strength: {superhero.powerstats.strength != "null" ? superhero.powerstats.strength : "Unavailable"}</li>
                            <li>Speed: {superhero.powerstats.speed != "null" ? superhero.powerstats.speed : "Unavailable"}</li>
                            <li>Durability: {superhero.powerstats.durability != "null" ? superhero.powerstats.durability : "Unavailable"}</li>
                            <li>Power: {superhero.powerstats.power != "null" ? superhero.powerstats.power : "Unavailable"}</li>
                            <li>Combat: {superhero.powerstats.combat != "null" ? superhero.powerstats.combat : "Unavailable"}</li>
                        </PowerstatsList>
                    </SideBySideDiv>
                </SingleSuperheroDiv>
            ))}
        </AllSuperheroesDiv>
    )
}