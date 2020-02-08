import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { CadastrarProdutosComponent } from './cadastrar-produtos/cadastrar-produtos.component';


@NgModule({
  declarations: [ListarProdutosComponent, CadastrarProdutosComponent],
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
