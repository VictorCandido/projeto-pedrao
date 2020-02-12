import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly api = `${environment.apiUrl}/produtos`;

  constructor(
    private http: HttpClient
  ) { }

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
    return this.http.put(`${this.api}/${produto.id}`, { nome_categoria: produto.nome_categoria });
  }

  deleteProduto(id): any {
    return this.http.delete(`${this.api}/${id}`);
  }
}
