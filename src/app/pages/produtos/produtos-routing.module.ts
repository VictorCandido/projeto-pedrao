import { ExibirProdutoComponent } from './exibir-produto/exibir-produto.component';
import { CadastrarProdutosComponent } from './cadastrar-produtos/cadastrar-produtos.component';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'listar', component: ListarProdutosComponent },
  { path: 'cadastrar', component: CadastrarProdutosComponent },
  { path: ':id', component: ExibirProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
