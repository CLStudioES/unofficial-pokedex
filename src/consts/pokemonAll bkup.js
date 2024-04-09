let response;
let data;
let pokemonList = [];

for (let index = 1; index < 151; index++) {
    response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${index}`,
    );
    data = await response.json();
    pokemonList[index - 1] = data;
}

async function getPokemonG2() {
    let response;
    let data;
    let pokemonList = [];

    for (let index = 152; index < 251; index++) {
        response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${index}`,
        );
        data = await response.json();
        pokemonList[index - 1] = data;
    }
    return pokemonList;
}
async function getPokemonG3() {
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
}
async function getPokemonG4() {
    let response;
    let data;
    let pokemonList = [];

    for (let index = 387; index < 493; index++) {
        response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${index}`,
        );
        data = await response.json();
        pokemonList[index - 1] = data;
    }
    return pokemonList;
}
async function getPokemonG5() {
    let response;
    let data;
    let pokemonList = [];

    for (let index = 494; index < 649; index++) {
        response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${index}`,
        );
        data = await response.json();
        pokemonList[index - 1] = data;
    }
    return pokemonList;
}
async function getPokemonG6() {
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
}
async function getPokemonG7() {
    let response;
    let data;
    let pokemonList = [];

    for (let index = 722; index < 809; index++) {
        response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${index}`,
        );
        data = await response.json();
        pokemonList[index - 1] = data;
    }
    return pokemonList;
}
async function getPokemonAll() {
    let response;
    let data;
    let pokemonList = [];

    for (let index = 1; index < 809; index++) {
        response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${index}`,
        );
        data = await response.json();
        pokemonList[index - 1] = data;
    }
    return pokemonList;
}
