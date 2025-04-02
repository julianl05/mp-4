"use server";
export async function getSuperheroData() {
    const res = await fetch(`https://superheroapi.com/api/${process.env.SUPERHERO_API_KEY}/search/superman`);
    const data = await res.json();
    console.log(data);
    return data;
}