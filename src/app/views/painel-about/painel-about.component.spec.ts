import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelAboutComponent } from './painel-about.component';

describe('PainelAboutComponent', () => {
  let component: PainelAboutComponent;
  let fixture: ComponentFixture<PainelAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PainelAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
