import { Routes } from '@angular/router';
import { PainelAnimeComponent } from './views/painel-anime/painel-anime.component';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'Web-Pokedex/anime', pathMatch: 'full' },
  { path: 'Web-Pokedex/anime', component: PainelAnimeComponent },
  { path: 'Web-Pokedex', component: LoginComponent },
];

// a