import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelPokedexComponent } from './painel-pokedex.component';

describe('PainelPokedexComponent', () => {
  let component: PainelPokedexComponent;
  let fixture: ComponentFixture<PainelPokedexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelPokedexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PainelPokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
