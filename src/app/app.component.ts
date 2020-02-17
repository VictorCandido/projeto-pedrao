import { AppService } from './app.service';
import { CategoriasService } from './pages/categorias/categorias.service';
import { Component } from '@angular/core';

import { PoMenuItem, PoNavbarItem } from '@portinari/portinari-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly navbarItems: Array<PoNavbarItem>;

  menus: Array<PoMenuItem>;

  constructor(
    private categoriasService: CategoriasService,
    private appService: AppService
    ) {
    this.navbarItems = [
      { label: 'Home', link: 'home' },
      { label: 'Categorias', link: 'categorias/listar' },
      { label: 'Produtos', link: 'produtos/listar' },
    ];

    CategoriasService.emitirCategoria.subscribe(categorias => {
      this.menus = categorias;
    });

    this.appService.updateMenuCategorias();
  }
}
