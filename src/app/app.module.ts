import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/list-pokemons/pokemons.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color';
import { BorderCardDirective } from './directive/border-card.directive';
import { DetailPokemonsProjectComponent } from './pokemon/detail-pokemons.project/detail-pokemons.project.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PageNotFoundComponent,
    PokemonTypeColorPipe,
    BorderCardDirective,
    DetailPokemonsProjectComponent,
    EditPokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
