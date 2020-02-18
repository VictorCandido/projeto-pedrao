import { PoModule } from '@portinari/portinari-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasService } from './categorias.service';
import { CategoriasRoutingModule } from './categorias-routing.module';
import { ListarCategoriaComponent } from './listar-categoria/listar-categoria.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListarCategoriaComponent],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    PoModule,
    FormsModule
  ],
  providers: [
    CategoriasService
  ]
})
export class CategoriasModule { }
