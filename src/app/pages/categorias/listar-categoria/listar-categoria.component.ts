import { Component, OnInit, ViewChild } from '@angular/core';
import {
  PoTableColumn,
  PoPageAction,
  PoTableComponent,
  PoModalComponent,
  PoModalAction,
  PoNotificationService,
  PoNotification
} from '@portinari/portinari-ui';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent implements OnInit {
  public items: any[];

  public readonly columns: PoTableColumn[] = [
    { label: 'ID', property: 'id' },
    { label: 'Nome da categoria', property: 'nome_categoria' },
  ];

  public readonly actions: Array<PoPageAction> = [
    { label: 'Novo', icon: 'po-icon-plus', action: this.novoFunction },
    { label: 'Editar', icon: 'po-icon-edit', action: this.editarFunction },
    { label: 'Salvar', icon: 'po-icon-ok', action: this.salvarFunction },
    { label: 'Remover', icon: 'po-icon-close', action: this.removerFunction, type: 'danger' },
  ];

  public readonly closeNovo: PoModalAction = {
    action: () => this.close_novo(),
    label: 'Cancelar',
    danger: true
  };

  public readonly confirmNovo: PoModalAction = {
    action: () => this.confirm_novo(),
    label: 'Confirmar',
  };

  @ViewChild(PoTableComponent, { static: true }) private poTable: PoTableComponent;
  @ViewChild(PoModalComponent, { static: true }) private poModal: PoModalComponent;
  @ViewChild('novoForm', { static: true }) form: NgForm;

  constructor( private poNotification: PoNotificationService ) {  }

  ngOnInit() {
    this.items = [
      { id: 1, nome_categoria: 'CATEGORIA 1' },
      { id: 2, nome_categoria: 'CATEGORIA 2' },
      { id: 3, nome_categoria: 'CATEGORIA 3' },
      { id: 4, nome_categoria: 'CATEGORIA 4' },
      { id: 5, nome_categoria: 'CATEGORIA 5' },
    ];
  }

  private novoFunction() {
    this.poModal.open();
  }

  private editarFunction() {

  }

  private salvarFunction() {

  }

  private removerFunction() {
    console.log(this.poTable.getSelectedRows());
  }

  private confirm_novo() {
    if (this.form.invalid) {
      const config: PoNotification = {
        message: 'Nome da categoria não preenchida!',
        orientation: 1,
        duration: 3000
      };

      this.poNotification.warning(config);
    }
  }

  private close_novo() {
    this.poModal.close();
  }

}
