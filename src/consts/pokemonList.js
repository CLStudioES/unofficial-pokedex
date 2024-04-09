let response;
let data;
export let pokemonList = [];

for (let index = 1; index <= 151; index++) {
    response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${index}`,
    );
    data = await response.json();
    pokemonList[index - 1] = data;
}
