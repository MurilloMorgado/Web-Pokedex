import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PainelAnimeComponent } from './views/painel-anime/painel-anime.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PainelAnimeComponent],
  template: `
  <router-outlet></router-outlet>
  <app-painel-anime/>
  
  `,
  

})
export class AppComponent {
  title = 'pokedex';
}
