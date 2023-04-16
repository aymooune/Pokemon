import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from 'src/app/pokemons.service';
import {NgForm} from '@angular/forms';
import { Pokemon } from 'src/app/Pokemons.models';

@Component({
  selector: 'app-edit-pokemon-form',
  templateUrl: './edit-pokemon-form.component.html',
  styleUrls: ['./edit-pokemon-form.component.css']
})
export class EditPokemonFormComponent implements OnInit {

  @Input() pokemon: any;

  types: any = [];

  constructor(private router: Router, private route: ActivatedRoute, private pokemonService: PokemonsService) {
  }

  getPokemonTypes(): string[] {
    return ["Vol", "Plante", "Feu", "Eau", "Electrik", "Normal"];
  }

  ngOnInit(): void {
    this.types = this.getPokemonTypes();
    let idUrl= this.route.snapshot.params['id']
    this.pokemonService.getPokemon(idUrl).subscribe(pokemon => this.pokemon = pokemon);
  }

  // Détermine si e type est passé en paramètres appartient ou no au pokémon en cours d'édition
  hasType(type: string): boolean{
    let index = this.pokemon.types.indexOf(type);
    return index > -1;
  }

  // Méthode appelée lorsque l'utilisateur ajoute ou retire un type au pokémon au cours d'édition
  selectType($event: any, type: string): void {
    let checked = $event.target.checked;

    if (checked) {
      this.pokemon.types.push(type);
    } else {
      let index = this.pokemon.types.indexOf(type);
      if (index > -1) {
        this.pokemon.types.splice(index, 1);
      }
    }
  }

  isTypesValid(type: string): boolean{
    if (this.pokemon.types.length === 1 && this.hasType(type)) {
      return false;
    }

    if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
      return false;
    }

    return true;
  }

  onSubmit(): void {
    this.pokemonService.savePokemon(this.pokemon)
      .subscribe( () => this.router.navigate(['/pokemon', this.pokemon.id]));
  }

  goBack() {
    this.router.navigate(["/pokemon", this.pokemon.id]);
  }

  delete(): void {
    this.pokemonService.deletePokemon(this.pokemon)
      .subscribe( () => this.router.navigate(['/pokemon/all']));
  }
}
