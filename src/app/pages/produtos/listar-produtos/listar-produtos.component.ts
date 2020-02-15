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
  private dados: any;
  private subscription: Subscription;

  private config: PoNotification = {
    message: '',
    orientation: 1,
    duration: 3000
  };

  public readonly actions: Array<PoPageAction> = [
    { label: 'Novo', icon: '', action: this.novoFunction },
    { label: 'Editar', icon: '', action: this.editarFunction },
    { label: 'Remover', icon: '', action: this.removerFunction },
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

  @ViewChild(PoTableComponent, { static: true }) poTable: PoTableComponent;
  @ViewChild('modalProduto', { static: true }) private poModalCadastrar: PoModalComponent;

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
  }

  recebeValores($event) {
    this.dados = $event;
  }

  confirm_novo() {
    console.log(this.dados);
    if (this.dados && this.dados.nomeProduto && this.dados.categoria && this.dados.descricao) {
      const param = {
        id_categoria: this.dados.categoria,
        nome_produto: this.dados.nomeProduto,
        descricao: this.dados.descricao
      };

      this.service.insertProdutos(param).subscribe(res => {
        if (res) {
          this.subscription.unsubscribe();
          this.iniciaTable();

          this.appService.limparCampos();
          this.poModalCadastrar.close();

          this.config.message = 'Produto cadastrado com sucesso.';
          this.poNotification.success(this.config);
        } else {
          this.config.message = 'Falha ao cadastrar novo produto.';
          this.poNotification.error(this.config);
        }
      });
    } else {
      this.config.message = 'Necessário preencher todos os campos.';
      this.poNotification.warning(this.config);
    }
  }

  close_novo() {
    this.poModalCadastrar.close();
  }

  novoFunction() {
    this.poModalCadastrar.open();
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
