import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPokemonFormComponent } from './edit-pokemon-form.component';

describe('EditPokemonFormComponent', () => {
  let component: EditPokemonFormComponent;
  let fixture: ComponentFixture<EditPokemonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPokemonFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPokemonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
