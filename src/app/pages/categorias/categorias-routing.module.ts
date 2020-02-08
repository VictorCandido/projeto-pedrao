import { CadastrarCategoriaComponent } from './cadastrar-categoria/cadastrar-categoria.component';
import { ListarCategoriaComponent } from './listar-categoria/listar-categoria.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'listar', component: ListarCategoriaComponent },
  { path: 'cadastrar', component: CadastrarCategoriaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
