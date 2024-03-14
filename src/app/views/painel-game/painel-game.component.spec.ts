import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelGameComponent } from './painel-game.component';

describe('PainelGameComponent', () => {
  let component: PainelGameComponent;
  let fixture: ComponentFixture<PainelGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PainelGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
