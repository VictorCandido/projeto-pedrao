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
  private nomeProduto: string;
  private categoria: string;
  private descricao: string;

  @Output() form = new EventEmitter();

  constructor(
    private categoriasService: CategoriasService
  ) { }

  ngOnInit() {
    this.getCategoriasOptions();
  }

  onSubmit(f: NgForm) {
    console.log(f);
  }

  getCategoriasOptions() {
    // return new Promise((resolve, reject) => {
      this.categoriasService.getCategorias().subscribe(res => {
        const categorias: Array<PoSelectOption> = res.map(element => {
          return { label: element.nome_categoria, value: element.id };
        });

        this.categorias = categorias;
        // resolve();
       });
    // });
  }

  changeNomeProduto($event) {
    this.nomeProduto = $event;
    this.enviaDados();
  }

  changeCategoria($event) {
    this.categoria = $event;
    this.enviaDados();
  }

  changeDescricao($event) {
    this.descricao = $event;
    this.enviaDados();
  }

  enviaDados() {
    this.form.emit({
      nomeProduto: this.nomeProduto,
      categoria: this.categoria,
      descricao: this.descricao
    });
  }
}
