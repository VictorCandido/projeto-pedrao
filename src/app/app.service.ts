import { CategoriasService } from './pages/categorias/categorias.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {


  constructor(
    private categoriasService: CategoriasService
  ) { }

  updateMenuCategorias() {
    this.categoriasService.getCategoriasProdutos().then(categorias => {
      const final = new Array();

      categorias.forEach(categoria => {
        const item = {
            label: categoria.categoria.nome_categoria,
            subItems: []
        };

        categoria.produtos.forEach(produto => {
            item.subItems.push({
                label: produto.nome_produto,
                link: `produtos/${produto.id}`
            });
        });

        final.push(item);
      });

      CategoriasService.emitirCategoria.emit(final);

    });
  }
}
