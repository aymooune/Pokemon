import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './pokemons/list-pokemons/pokemons.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found';
import { DetailPokemonsProjectComponent } from './pokemons/detail-pokemons/detail-pokemons.component';
import { EditPokemonFormComponent } from './pokemons/edit-pokemon-form/edit-pokemon-form.component';
const routes: Routes = [
  {path: '', redirectTo: 'pokemon/all', pathMatch: 'full'},
  {path: 'pokemon/all', component : PokemonsComponent},
  {path:'pokemon/:id', component: DetailPokemonsProjectComponent},
   {path:'pokemon/edit/:id', component: EditPokemonFormComponent},
  
  {path: '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
