import { ProdutosService } from './../produtos.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PoTableColumn, PoPageAction, PoTableComponent, PoModalAction, PoModalComponent } from '@portinari/portinari-ui';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css'],
  providers: [ ProdutosService ]
})
export class ListarProdutosComponent implements OnInit {
  public items: any[];

  public readonly actions: Array<PoPageAction> = [
    { label: 'Novo', icon: '', action: this.novoFunction },
    { label: 'Editar', icon: '', action: this.editarFunction },
    { label: 'Remover', icon: '', action: this.removerFunction },
  ];

  public readonly columns: PoTableColumn[] = [
    { label: 'ID', property: 'id' },
    { label: 'Categoria', property: 'id_categoria' },
    { label: 'Nome do produto', property: 'nome_produto' },
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

  constructor( private service: ProdutosService ) {  }

  ngOnInit() {
    this.service.getProdutos().subscribe(res => this.items = res);
  }

  recebeValores($event) {
    console.log($event);
  }

  confirm_novo() {

  }

  close_novo() {

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
