import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, InputTextModule, ButtonModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
          label: 'Anime',
          icon: 'pi pi-fw pi-file',

      },
      {
          label: 'Game',
          icon: 'pi pi-fw pi-file',

      },
      {
          label: 'Pokedex',
          icon: 'pi pi-fw pi-pencil',

      },
      {
          label: 'About',
          icon: 'pi pi-fw pi-user',
         
      }
  ];
  }

}
