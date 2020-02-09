import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@portinari/portinari-ui';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent implements OnInit {
  public columns: PoTableColumn[];
  public items: any[];


  constructor() {
    this.columns = [
      { label: 'ID', property: 'id' },
      { label: 'Nome da categoria', property: 'nome_categoria' },
    ];

    this.items = [
      { id: 1, nome_categoria: 'CATEGORIA 1' },
      { id: 2, nome_categoria: 'CATEGORIA 2' },
      { id: 3, nome_categoria: 'CATEGORIA 3' },
      { id: 4, nome_categoria: 'CATEGORIA 4' },
      { id: 5, nome_categoria: 'CATEGORIA 5' },
    ]
  }

  ngOnInit() {
  }

}
