
let response;
let data;
let pokemonList = [];

for (let index = 252; index < 386; index++) {
    response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${index}`,
    );
    data = await response.json();
    pokemonList[index - 1] = data;
}
return pokemonList;
