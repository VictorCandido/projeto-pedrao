import { ProdutosService } from './../produtos.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PoTableColumn, PoPageAction, PoTableComponent } from '@portinari/portinari-ui';

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

  @ViewChild(PoTableComponent, { static: true }) poTable: PoTableComponent;

  constructor( private service: ProdutosService ) {  }

  ngOnInit() {
    this.service.getProdutos().subscribe(res => this.items = res);
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
