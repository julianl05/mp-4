export type Superhero = {
    id: string;
    name: string;
    powerstats: {
        intelligence: string;
        strength: string;
        speed: string;
        durability: string;
        power: string;
        combat: string;
    };
    image:{
        url: string;
    }
}