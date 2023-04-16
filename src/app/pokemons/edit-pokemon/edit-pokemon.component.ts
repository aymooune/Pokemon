import { Component, OnInit } from '@angular/core';

import { Pokemon } from 'src/app/Pokemons.models';
import { POKEMONS } from 'src/app/pokemons/donnees-pokemons/mock-pokemon';
import {Router, ActivatedRoute} from '@angular/router';
import { PokemonsService } from 'src/app/pokemons.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit{
  pokemons !: Pokemon[];
  pokemon: any = null;

  isEditActive: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router,  private pokemonsService: PokemonsService){ }

  ngOnInit(): void{
    this.pokemons = POKEMONS
    let idUrl= this.route.snapshot.params['id']
    this.pokemonsService.getPokemon(idUrl).subscribe(pokemon => this.pokemon = pokemon);
    console.log(this.isEditActive);
    
  }

  goBack(){
    this.router.navigate(['pokemon/all'])
  }

  edit(){
    this.isEditActive = !this.isEditActive;
  }

}
