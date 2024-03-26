import { Routes } from '@angular/router';
import { PainelAnimeComponent } from './views/painel-anime/painel-anime.component';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'anime', pathMatch: 'full' },
  { path: 'anime', component: PainelAnimeComponent },
  { path: 'login', component: LoginComponent },
];

// a