import { Component } from '@angular/core';

import { Pokemon } from 'src/app/Pokemons.models';
import { POKEMONS } from 'src/app/pokemons/donnees-pokemons/mock-pokemon';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent {
  pokemons !: Pokemon[];
  pokemon: any = null;

  constructor(private route: ActivatedRoute, private router: Router){ }

  ngOnInit(): void{
    this.pokemons = POKEMONS
    let idUrl= this.route.snapshot.params['id']
    console.log(this.route.snapshot.params['id']);

    for(let i=0; i< this.pokemons.length; i++){
      if (this.pokemons[i].id == idUrl){
        this.pokemon = this.pokemons[i];
      }
    }
  }

  goBack(){
    this.router.navigate(['pokemon/all'])
  }

  edit(){
    console.log(this.pokemon.id);
        let link = ['/edit', this.pokemon.id];
        this.router.navigate(link);
  }
}
