import { AppService } from './../../../app.service';
import { ProdutosService } from './../produtos.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  PoTableColumn,
  PoPageAction,
  PoTableComponent,
  PoModalAction,
  PoModalComponent,
  PoNotificationService,
  PoNotification
} from '@portinari/portinari-ui';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css'],
  providers: [ ProdutosService ]
})
export class ListarProdutosComponent implements OnInit {
  public items: any[];
  public produtoSelecionado: any;
  public produtoTitle: string;

  private dados: any;
  private subscription: Subscription;
  private editMode: boolean;

  private config: PoNotification = {
    message: '',
    orientation: 1,
    duration: 3000
  };

  public readonly actions: Array<PoPageAction> = [
    { label: 'Novo', icon: '', action: this.novoFunction },
    { label: 'Editar', icon: '', action: this.editarFunction, disabled: true },
    { label: 'Remover', icon: '', action: this.removerFunction, disabled: true },
  ];

  public readonly columns: PoTableColumn[] = [
    { label: 'ID', property: 'id' },
    { label: 'Categoria', property: 'id_categoria' },
    { label: 'Nome do produto', property: 'nome_produto' },
    { label: 'Descrição do produto', property: 'descricao' },
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

  public readonly confirmConfirm: PoModalAction = {
    action: () => this.close_confirm(),
    label: 'Cancelar',
    danger: true
  };

  public readonly closeConfirm: PoModalAction = {
    action: () => this.confirm_confirm(),
    label: 'Confirmar',
  };

  @ViewChild(PoTableComponent, { static: true }) poTable: PoTableComponent;
  @ViewChild('modalProduto', { static: true }) private poModalCadastrar: PoModalComponent;
  @ViewChild('modalConfirm', { static: true }) private poModalConfirm: PoModalComponent;

  constructor(
    private service: ProdutosService,
    private poNotification: PoNotificationService,
    private appService: AppService
    ) {  }

  ngOnInit() {
    this.iniciaTable();
  }

  iniciaTable() {
    this.subscription = this.service.getProdutos().subscribe(res => this.items = res);

    this.produtoSelecionado = {
      id: '',
      id_categoria: '',
      nome_produto: '',
      descricao: ''
    };

    this.actions[0].disabled = false;
    this.actions[1].disabled = true;
    this.actions[2].disabled = true;
  }

  selectRowFunction(row: any) {
    if (row.$selected) {
      this.produtoSelecionado = row;

      this.actions[0].disabled = true;
      this.actions[1].disabled = false;
      this.actions[2].disabled = false;
    } else {
      this.produtoSelecionado = {
        id: '',
        id_categoria: '',
        nome_produto: '',
        descricao: ''
      };

      this.actions[0].disabled = false;
      this.actions[1].disabled = true;
      this.actions[2].disabled = true;
    }
  }

  recebeValores($event) {
    this.dados = $event;
  }

  confirm_novo() {
    if (this.dados && this.dados.nomeProduto && this.dados.categoria && this.dados.descricao) {
      const param = {
        id_produto: this.dados.idProduto,
        id_categoria: this.dados.categoria,
        nome_produto: this.dados.nomeProduto,
        descricao: this.dados.descricao
      };

      if (this.editMode) {

        this.service.updateProduto(param).subscribe(res => {
          if (res) {
            this.subscription.unsubscribe();
            this.iniciaTable();

            this.service.camposValues('', '', '', '');
            this.poModalCadastrar.close();

            this.config.message = 'Produto atualizado com sucesso.';
            this.poNotification.success(this.config);
          } else {
            this.config.message = 'Falha ao atualizar produto.';
            this.poNotification.error(this.config);
          }
        });

      } else {

        this.service.insertProdutos(param).subscribe(res => {
          if (res) {
            this.subscription.unsubscribe();
            this.iniciaTable();

            this.service.camposValues('', '', '', '');
            this.poModalCadastrar.close();

            this.config.message = 'Produto cadastrado com sucesso.';
            this.poNotification.success(this.config);
          } else {
            this.config.message = 'Falha ao cadastrar novo produto.';
            this.poNotification.error(this.config);
          }
        });

      }

      this.appService.updateMenuCategorias();
    } else {
      this.config.message = 'Necessário preencher todos os campos.';
      this.poNotification.warning(this.config);
    }
  }

  close_novo() {
    this.poModalCadastrar.close();
  }

  novoFunction() {
    this.produtoTitle = 'Novo produto';
    this.editMode = false;
    this.poModalCadastrar.open();
  }

  close_confirm() {
    this.poModalConfirm.close();
  }

  confirm_confirm() {
    this.service.deleteProduto(this.produtoSelecionado.id).subscribe(res => {
      if (res) {

        this.subscription.unsubscribe();
        this.iniciaTable();
        this.appService.updateMenuCategorias();

        this.config.message = 'Produto removido com sucesso.';
        this.poNotification.success(this.config);

        this.poModalConfirm.close();

      } else {

        this.config.message = 'Falha ao remover o item selecionado.';
        this.poNotification.error(this.config);

      }
    });
  }

  editarFunction() {
    this.service.camposValues(
      this.produtoSelecionado.id,
      this.produtoSelecionado.nome_produto,
      this.produtoSelecionado.id_categoria,
      this.produtoSelecionado.descricao
    );

    this.editMode = true;
    this.produtoTitle = 'Editar produto';
    this.poModalCadastrar.open();
  }

  removerFunction() {
    this.poModalConfirm.open();
  }

}
