import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/list-pokemons/pokemons.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color';
import { BorderCardDirective } from './directive/border-card.directive';
import { DetailPokemonsProjectComponent } from './pokemons/detail-pokemons/detail-pokemons.component';
import { EditPokemonComponent } from './pokemons/edit-pokemon/edit-pokemon.component';
import { EditPokemonFormComponent } from './pokemons/edit-pokemon-form/edit-pokemon-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PokemonsService } from './pokemons.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PokemonDataService } from './pokemon-data.service';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PageNotFoundComponent,
    PokemonTypeColorPipe,
    BorderCardDirective,
    DetailPokemonsProjectComponent,
    EditPokemonComponent,
    EditPokemonFormComponent,
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(PokemonDataService)
  ],
  providers: [
    PokemonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
