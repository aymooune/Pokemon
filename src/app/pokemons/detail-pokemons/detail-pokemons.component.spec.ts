import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPokemonsProjectComponent } from './detail-pokemons.component';

describe('DetailPokemonsProjectComponent', () => {
  let component: DetailPokemonsProjectComponent;
  let fixture: ComponentFixture<DetailPokemonsProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPokemonsProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPokemonsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
