let response;
let data;
let pokemonListG1 = [];
let pokemonListG2 = [];
let pokemonListG3 = [];
let pokemonListG4 = [];
let pokemonListG5 = [];
let pokemonListG6 = [];
let pokemonListG7 = [];
let pokemonListG8 = [];
let pokemonListG9 = [];

export function test() {
    return 'Hola';
}

//Gen 1
export async function getG1() {
    for (let index = 1; index <= 151; index++) {
        response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${index}`,
        );
        data = await response.json();
        pokemonListG1[index - 1] = data;
    }
    return await pokemonListG1;
}

//Gen 2
export async function getG2() {
    for (let index = 152; index <= 251; index++) {
        response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${index}`,
        );
        data = await response.json();
        pokemonListG2[index - 1] = data;
    }
}
//Gen 3
export async function getG3() {
    for (let index = 252; index <= 386; index++) {
        response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${index}`,
        );
        data = await response.json();
        pokemonListG3[index - 1] = data;
    }
}
//Gen 4
export async function getG4() {
    for (let index = 387; index <= 493; index++) {
        response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${index}`,
        );
        data = await response.json();
        pokemonListG4[index - 1] = data;
    }
}
//Gen 5
export async function getG5() {
    for (let index = 494; index <= 649; index++) {
        response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${index}`,
        );
        data = await response.json();
        pokemonListG5[index - 1] = data;
    }
}
//Gen 6
export async function getG6() {
    for (let index = 650; index <= 721; index++) {
        response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${index}`,
        );
        data = await response.json();
        pokemonListG6[index - 1] = data;
    }
}
//Gen 7
export async function getG7() {
    for (let index = 722; index <= 809; index++) {
        response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${index}`,
        );
        data = await response.json();
        pokemonListG7[index - 1] = data;
    }
}
//Gen 8
export async function getG8() {
    for (let index = 810; index <= 905; index++) {
        response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${index}`,
        );
        data = await response.json();
        pokemonListG8[index - 1] = data;
    }
}
//Gen 9
export async function getG9() {
    for (let index = 906; index <= 1025; index++) {
        response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${index}`,
        );
        data = await response.json();
        pokemonListG9[index - 1] = data;
    }
}
