import { CategoriasService } from './../categorias.service';
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
  styleUrls: ['./listar-categoria.component.css'],
  providers: [PoNotificationService]
})

export class ListarCategoriaComponent implements OnInit {
  public items: any[];
  public nomeCategoria: string;
  public idCategoria: string;
  public editMode: boolean;
  public categoriaSelecionada;

  private config: PoNotification = {
    message: '',
    orientation: 1,
    duration: 3000
  };

  public readonly columns: PoTableColumn[] = [
    { label: 'ID', property: 'id' },
    { label: 'Nome da categoria', property: 'nome_categoria' },
  ];

  public readonly actions: Array<PoPageAction> = [
    { label: 'Novo', icon: 'po-icon-plus', action: this.novoFunction, disabled: false },
    { label: 'Editar', icon: 'po-icon-edit', action: this.editarFunction, disabled: true },
    { label: 'Remover', icon: 'po-icon-close', action: this.removerFunction, type: 'danger', disabled: true },
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

  public readonly closeConfirm: PoModalAction = {
    action: () => this.close_confirm(),
    label: 'Cancelar',
    danger: true
  };

  public readonly confirmConfirm: PoModalAction = {
    action: () => this.confirm_confirm(),
    label: 'Confirmar',
  };

  @ViewChild(PoTableComponent, { static: true }) private poTable: PoTableComponent;
  @ViewChild('modalCategoria', { static: true }) private poModalCadastrar: PoModalComponent;
  @ViewChild('modalConfirm', { static: true }) private poModalConfirm: PoModalComponent;
  @ViewChild('novoForm', { static: true }) form: NgForm;

  constructor(
    private poNotification: PoNotificationService,
    private service: CategoriasService
  ) {  }

  ngOnInit() {
    this.items = this.service.getItems();

    this.categoriaSelecionada = {
      id: '',
      nome_categoria: ''
    };
  }

  selectRowFunction(row: any) {
    if (row.$selected) {
      this.categoriaSelecionada = row;

      this.actions[0].disabled = true;
      this.actions[1].disabled = false;
      this.actions[2].disabled = false;
    } else {
      this.categoriaSelecionada = {
        id: '',
        nome_categoria: ''
      };

      this.actions[0].disabled = false;
      this.actions[1].disabled = true;
      this.actions[2].disabled = true;
    }
  }

  private novoFunction() {
    this.editMode = false;
    this.nomeCategoria = '';
    this.poModalCadastrar.open();
  }

  private editarFunction() {
    const row = this.poTable.getSelectedRows()[0];

    if (row) {
      this.editMode = true;

      this.idCategoria = this.categoriaSelecionada.id;
      this.nomeCategoria = this.categoriaSelecionada.nome_categoria;

      this.poModalCadastrar.open();
    }
  }

  private removerFunction() {
    this.poModalConfirm.open();
  }

  private confirm_novo() {
    if (this.form.invalid) {

      this.config.message = 'Necessario preencher nome da categoria!';
      this.poNotification.warning(this.config);

    } else {
      // Cadastrar novo registo de categoria

      this.config.message = 'Cadastrado com sucesso!';
      this.poNotification.success(this.config);

      this.poModalCadastrar.close();
    }
  }

  private close_novo() {
    this.poModalCadastrar.close();
  }

  private close_confirm() {
    this.poModalConfirm.close();
  }

  private confirm_confirm() {
    this.config.message = 'Removido com sucesso!';
    this.poNotification.success(this.config);

    this.poModalConfirm.close();
  }

}
