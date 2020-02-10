import { Component, OnInit, ViewChild } from '@angular/core';
import { PoTableColumn, PoPageAction, PoTableComponent } from '@portinari/portinari-ui';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent implements OnInit {
  public columns: PoTableColumn[];
  public items: any[];

  public readonly actions: Array<PoPageAction> = [
    { label: 'Novo', icon: 'po-icon-plus', action: this.novoFunction },
    { label: 'Editar', icon: 'po-icon-edit', action: this.editarFunction },
    { label: 'Salvar', icon: 'po-icon-ok', action: this.salvarFunction },
    { label: 'Remover', icon: 'po-icon-close', action: this.removerFunction, type: 'danger' },
  ];

  @ViewChild(PoTableComponent, { static: true }) poTable: PoTableComponent;

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
    ];
  }

  ngOnInit() {
  }

  novoFunction() {
    console.log(this.poTable.getSelectedRows());
  }

  editarFunction() {

  }

  salvarFunction() {

  }

  removerFunction() {
    console.log(this.poTable.getSelectedRows());
  }

}
