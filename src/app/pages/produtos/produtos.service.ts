import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  public static emitirProduto = new EventEmitter<any>();

  private readonly api = `${environment.apiUrl}/produtos`;

  constructor(
    private http: HttpClient
  ) { }

  getProduto(id): any {
    return this.http.get(`${this.api}/${id}`);
  }

  getProdutos(): any {
    return this.http.get(this.api);
  }

  getProdutosByCategoria(categoriaId): any {
    return this.http.get(`${this.api}/?id_categoria=${categoriaId}`);
  }

  insertProdutos(produto): any {
    return this.http.post(this.api, produto);
  }

  updateProduto(produto): any {
    return this.http.put(`${this.api}/${produto.id_produto}`, {
      nome_produto: produto.nome_produto,
      id_categoria: produto.id_categoria,
      descricao: produto.descricao
    });
  }

  deleteProduto(id): any {
    return this.http.delete(`${this.api}/${id}`);
  }

  camposValues(idProduto: string, nomeProduto: string, categoria: string, descricao: string) {
    ProdutosService.emitirProduto.emit({ idProduto, nomeProduto, categoria, descricao });
  }
}
