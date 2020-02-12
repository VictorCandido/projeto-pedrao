import { CategoriasService } from './pages/categorias/categorias.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private categoriasService: CategoriasService
  ) { }

  // updateMenuCategorias() {
  //   this.categoriasService.getCategoriasProdutos().then(categorias => {

  //     let final = new Array();

  //     categorias.forEach(categoria => {
  //       categoria.produtos.forEach(produtos => {

  //       });
  //     });

  //     CategoriasService.emitirCategoria.emit(categorias);

  //   });
  // }
}
