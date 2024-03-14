import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-painel-anime',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './painel-anime.component.html',
  styleUrl: './painel-anime.component.css'
})
export class PainelAnimeComponent {

}
