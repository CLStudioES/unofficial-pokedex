
let response;
let data;
let pokemonList = [];

for (let index = 650; index < 721; index++) {
    response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${index}`,
    );
    data = await response.json();
    pokemonList[index - 1] = data;
}
return pokemonList;
