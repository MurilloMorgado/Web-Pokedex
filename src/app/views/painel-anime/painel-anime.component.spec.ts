import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelAnimeComponent } from './painel-anime.component';

describe('PainelAnimeComponent', () => {
  let component: PainelAnimeComponent;
  let fixture: ComponentFixture<PainelAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelAnimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PainelAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
