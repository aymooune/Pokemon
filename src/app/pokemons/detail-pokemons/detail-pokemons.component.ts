import { Component } from '@angular/core';

import { Pokemon } from 'src/app/Pokemons.models';
import { POKEMONS } from 'src/app/pokemons/donnees-pokemons/mock-pokemon';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-pokemons.project',
  templateUrl: './detail-pokemons.component.html',
  styleUrls: ['./detail-pokemons.component.css']
})
export class DetailPokemonsProjectComponent {
  pokemons !: Pokemon[];
  pokemon: any = null;

  constructor(private route: ActivatedRoute, private router: Router){ }

  ngOnInit(): void{
    this.pokemons = POKEMONS
    let idUrl= this.route.snapshot.params['id']

    for(let i=0; i< this.pokemons.length; i++){
      if (this.pokemons[i].id == idUrl){
        this.pokemon = this.pokemons[i];
      }
    }
  }

  goBack(){
    this.router.navigate(['pokemon/all'])
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = (e: any) => {
      // Mettre à jour la propriété "picture" du Pokémon avec le fichier sélectionné
      this.pokemon.picture = e.target.result;
    };
  
    reader.readAsDataURL(file);
  }

  edit(){
    this.router.navigate(['pokemon/edit', this.pokemon.id]);
  }
}
