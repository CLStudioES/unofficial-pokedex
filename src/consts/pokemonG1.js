let response;
let data;
export let pokemonListG1 = [];

for (let index = 1; index < 151; index++) {
    response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${index}`,
    );
    data = await response.json();
    pokemonListG1[index - 1] = data;
}
