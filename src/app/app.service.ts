import { CategoriasService } from './pages/categorias/categorias.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public static emitirProduto = new EventEmitter<any>();


  constructor(
    private categoriasService: CategoriasService
  ) { }

  limparCampos() {
    AppService.emitirProduto.emit({ nomeProduto: '', categoria: '', descricao: '' });
  }

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
