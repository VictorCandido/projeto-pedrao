import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exibir-produto',
  templateUrl: './exibir-produto.component.html',
  styleUrls: ['./exibir-produto.component.css']
})
export class ExibirProdutoComponent implements OnInit {

  public title: string;
  public produto: any = {
    id: '',
    id_categoria: '',
    nome_produto: '',
    descricao: '',
    preco: 0,
    quantidade: 0,
    imagemUrl: ''
  };

  private produtoId: string;

  constructor(
    private route: ActivatedRoute,
    private service: ProdutosService
  ) { }

  ngOnInit() {
    this.title = 'Produto';
    this.produtoId = this.route.snapshot.paramMap.get('id');

    this.route.params.subscribe(params => {
      this.produtoId = params.id;

      this.service.getProduto(this.produtoId).subscribe(res => {
        this.produto = res;
      });
    });
  }
}
