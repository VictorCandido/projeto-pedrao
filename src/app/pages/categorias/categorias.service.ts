import { ProdutosService } from './../produtos/produtos.service';
import { environment } from './../../../environments/environment';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  public static emitirCategoria = new EventEmitter<any>();
  private readonly api = `${environment.apiUrl}/categorias`;

  constructor(
    private http: HttpClient,
    private produtosService: ProdutosService
  ) { }

  getCategorias(): any {
    return this.http.get(this.api);
  }

  insertCategoria(categoria): any {
    return this.http.post(this.api, categoria);
  }

  updateCategoria(categoria): any {
    return this.http.put(`${this.api}/${categoria.id}`, { nome_categoria: categoria.nome_categoria });
  }

  deleteCategoria(id): any {
    return this.http.delete(`${this.api}/${id}`);
  }

  updateMenuCategorias() {
    this.getCategorias().subscribe(res => {
      const categorias = res.map(element => {
        return { label: element.nome_categoria, link: `categorias/${element.id}` };
      });
      CategoriasService.emitirCategoria.emit(categorias);
    });
  }

  getCategoriasProdutos(): any {
    return new Promise((resolve, reject) => {

      this.getCategorias().subscribe(categorias => {
        const categoriasProdutos: any[] = new Array();

        this.produtosService.getProdutos().subscribe(produtos => {
          categorias.forEach((categoria, catIndex) => {
            const produtosArr = new Array();

            produtos.forEach((produto, prodIndex) => {
              if (produto.id_categoria === categoria.id) {
                produtosArr.push(produto);
              }
            });

            const element = {
              categoria,
              produtos: produtosArr
            };

            categoriasProdutos.push(element);
          });

          resolve(categoriasProdutos);
        });
      });

    });
  }
}
