import { Component } from '@angular/core';

import { PoMenuItem, PoNavbarItem } from '@portinari/portinari-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly navbarItems: Array<PoNavbarItem>;

  readonly menus: Array<PoMenuItem>;

  constructor() {
    this.navbarItems = [
      { label: 'Home', link: 'home' },
      { label: 'Categorias', link: 'home' },
      { label: 'Produtos', link: 'home' },
    ];
  }

}
