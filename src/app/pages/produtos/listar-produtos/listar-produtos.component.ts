import { Component, OnInit, ViewChild } from '@angular/core';
import { PoTableColumn, PoPageAction, PoTableComponent } from '@portinari/portinari-ui';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {
  public items: any[];

  public readonly actions: Array<PoPageAction> = [
    { label: 'Novo', icon: '', action: this.novoFunction },
    { label: 'Editar', icon: '', action: this.editarFunction },
    { label: 'Salvar', icon: '', action: this.salvarFunction },
    { label: 'Remover', icon: '', action: this.removerFunction },
  ];

  public readonly columns: PoTableColumn[] = [
    { label: 'ID', property: 'id' },
    { label: 'Categoria', property: 'id_categoria' },
    { label: 'Nome do produto', property: 'nome_produto' },
  ];

  @ViewChild(PoTableComponent, { static: true }) poTable: PoTableComponent;

  constructor() {
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

  novoFunction() {

  }

  editarFunction() {

  }

  salvarFunction() {

  }

  removerFunction() {
    console.log(this.poTable.getSelectedRows());
    const selectedRow = this.poTable.getSelectedRows()[0];

    console.log(`Linha selecionada: ${selectedRow}`);
  }

}
