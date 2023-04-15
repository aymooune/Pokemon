import { Injectable } from "@angular/core";
import { Pokemon } from "../app/Pokemons.models";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()
export class PokemonsService {

  constructor(private http:HttpClient) {
  }

  private pokemonsUrl = 'api/pokemons';

  getPokemons(): Observable<Pokemon[]>{
return this.http.get<Pokemon[]>(this.pokemonsUrl);
}


  /*getPokemons(): Pokemon[] {
    return POKEMONS
  }*/

  getPokemon(id: number) {
    this.getPokemons().subscribe(pokemons => {
      for (let i = 0; i < pokemons.length; i++) {
        if (pokemons[i].id === id) {
          return pokemons[i];
        }
      }
    });
    return null;
  }
  
}