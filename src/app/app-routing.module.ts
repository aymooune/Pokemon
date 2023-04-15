import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './pokemons/list-pokemons/pokemons.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found';
import { DetailPokemonsProjectComponent } from './pokemon/detail-pokemons.project/detail-pokemons.project.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
const routes: Routes = [
  {path: '', redirectTo: 'pokemon/all', pathMatch: 'full'},
  {path: 'pokemon/all', component : PokemonsComponent},
  {path:'pokemon/:id', component: DetailPokemonsProjectComponent},
   {path:'edit/:id', component: EditPokemonComponent},
  
  {path: '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
