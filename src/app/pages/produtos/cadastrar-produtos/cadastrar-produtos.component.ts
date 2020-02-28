import { ProdutosService } from './../produtos.service';
import { CategoriasService } from './../../categorias/categorias.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  PoDynamicFormField,
  PoSelectOption
} from '@portinari/portinari-ui';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent implements OnInit {
  public fields: Array<PoDynamicFormField>;
  public categorias: Array<PoSelectOption> = [];
  public anexarLoading: boolean;
  public idProduto: string;
  public nomeProduto: string;
  public categoria: string;
  public descricao: string;
  public image: string;
  public preco: number;
  public quantid: number;

  @Output() form = new EventEmitter();

  constructor(
    private categoriasService: CategoriasService
  ) { }

  ngOnInit() {
    this.getCategoriasOptions();

    ProdutosService.emitirProduto.subscribe(res => {
      this.idProduto = res.idProduto;
      this.nomeProduto = res.nomeProduto;
      this.categoria = res.categoria;
      this.descricao = res.descricao;
    });

    this.anexarLoading = false;
  }

  getCategoriasOptions() {
    this.categoriasService.getCategorias().subscribe(res => {
      const categorias: Array<PoSelectOption> = res.map(element => {
        return { label: element.nome_categoria, value: element.id };
      });

      this.categorias = categorias;
    });
  }

  enviaDados() {
    this.form.emit({
      idProduto: this.idProduto,
      nomeProduto: this.nomeProduto,
      categoria: this.categoria,
      descricao: this.descricao
    });
  }
}
