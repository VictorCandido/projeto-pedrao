import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@portinari/portinari-ui';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {
  public columns: PoTableColumn[];
  public items: any[];

  constructor() {
    this.columns = [
      { label: 'ID', property: 'id' },
      { label: 'Categoria', property: 'id_categoria' },
      { label: 'Nome do produto', property: 'nome_produto' },
    ];

    this.items = [
      { id: 1, id_categoria: 'CATEGORIA 1', nome_produto: 'PRODUTO 1' },
      { id: 2, id_categoria: 'CATEGORIA 2', nome_produto: 'PRODUTO 2' },
      { id: 3, id_categoria: 'CATEGORIA 3', nome_produto: 'PRODUTO 3' },
      { id: 4, id_categoria: 'CATEGORIA 4', nome_produto: 'PRODUTO 4' },
      { id: 5, id_categoria: 'CATEGORIA 5', nome_produto: 'PRODUTO 5' },
    ];
  }

  ngOnInit() {
  }

}
