import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { ListarCategoriaComponent } from './listar-categoria/listar-categoria.component';
import { CadastrarCategoriaComponent } from './cadastrar-categoria/cadastrar-categoria.component';


@NgModule({
  declarations: [ListarCategoriaComponent, CadastrarCategoriaComponent],
  imports: [
    CommonModule,
    CategoriasRoutingModule
  ]
})
export class CategoriasModule { }
