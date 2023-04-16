import { InMemoryDbService } from "angular-in-memory-web-api";
import { POKEMONS } from "./pokemons/donnees-pokemons/mock-pokemon";

export class PokemonDataService implements InMemoryDbService {

    constructor() { }

    createDb() {
        const pokemons = POKEMONS;
      return {pokemons}
    }
}