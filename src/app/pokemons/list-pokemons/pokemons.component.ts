import { Component, OnInit } from "@angular/core";
import { Pokemon } from "src/app/Pokemons.models";
import { POKEMONS } from "../donnees-pokemons/mock-pokemon";
//Importation d'Angular le router pour les liens
import { Router } from "@angular/router";

@Component({
    selector: 'list-pokemon',
    templateUrl:'./pokemons.component.html'
})
export class PokemonsComponent implements OnInit{
    pokemons !: Pokemon[]

    constructor(private router: Router){}

    ngOnInit(): void {
        //J'insère les données de mock-pokemon.ts dans la variable pokemons du composant
        this.pokemons = POKEMONS
    }

    selectPokemon(pokemon: Pokemon){
        console.log(pokemon.id);
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }

    getRatingStars(rarity: string): Array<number> {
        const maxStars = 5;
        const rating = Math.floor(parseInt(rarity) / 20); // On divise la rareté par 20 pour obtenir le nombre d'étoiles
        const stars = new Array<number>(maxStars);
      
        for (let i = 0; i < maxStars; i++) {
          if (i < rating) {
            stars[i] = 100; // On met la pleine étoile
          } else {
            stars[i] = 0; // On met l'étoile vide
          }
        }
      
        return stars;
      }

}