import { AppService } from './../../../app.service';
import { NgForm } from '@angular/forms';
import { CategoriasService } from './../../categorias/categorias.service';
import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
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
  public nomeProduto: string;
  public categoria: string;
  public descricao: string;

  @Output() form = new EventEmitter();

  constructor(
    private categoriasService: CategoriasService
  ) { }

  ngOnInit() {
    this.getCategoriasOptions();
    AppService.emitirProduto.subscribe(res => {
      this.nomeProduto = res.nomeProduto;
      this.categoria = res.categoria;
      this.descricao = res.descricao;
    })
  }

  onSubmit(f: NgForm) {
    console.log(f);
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
      nomeProduto: this.nomeProduto,
      categoria: this.categoria,
      descricao: this.descricao
    });
  }
}
