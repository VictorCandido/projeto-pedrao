import { Component } from '@angular/core';

import { PoMenuItem } from '@portinari/portinari-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: 'home', icon: 'po-icon po-icon-home' },
    { label: 'Painel de Controle', icon: 'po-icon po-icon-settings', subItems: [
      { label: 'Categorias', subItems: [
        { label: 'Cadastrar nova categoria', link: 'categorias/cadastrar' },
        { label: 'Listar categorias', link: 'categorias/listar' },
      ]},
      { label: 'Produtos', subItems: [
        { label: 'Cadastrar novo produto', link: 'produtos/cadastrar' },
        { label: 'Listar produtos', link: 'produtos/listar' },
      ]},
    ]},
  ];

}
