"use server";

export async function getSuperheroData(name: string | string[] | undefined) {
    name = decodeURIComponent(String(name)); // decodes the name from the URL, including converting %20 into spaces
    const res = await fetch(`https://superheroapi.com/api/${process.env.SUPERHERO_API_KEY}/search/${name}`);
    const data = await res.json();
    console.log(data);
    return data;
}