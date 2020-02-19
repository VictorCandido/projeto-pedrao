import { PoModule } from '@portinari/portinari-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosService } from './produtos.service';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { CadastrarProdutosComponent } from './cadastrar-produtos/cadastrar-produtos.component';
import { FormsModule } from '@angular/forms';
import { ExibirProdutoComponent } from './exibir-produto/exibir-produto.component';


@NgModule({
  declarations: [ListarProdutosComponent, CadastrarProdutosComponent, ExibirProdutoComponent],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    PoModule,
    FormsModule
  ],
  providers: [
    ProdutosService
  ]
})
export class ProdutosModule { }
