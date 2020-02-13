import { CategoriasService } from './../../categorias/categorias.service';
import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { PoDynamicFormField, PoSelectOption, PoDynamicFormValidation, PoDynamicFormFieldChanged, PoDynamicFormComponent } from '@portinari/portinari-ui';
import { EventEmitter } from 'events';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent implements OnInit {
  public fields: Array<PoDynamicFormField>;
  private categorias: Array<PoSelectOption>;
  private cadastraForm: NgForm;

  @Output() form = new EventEmitter();
  @ViewChild(PoDynamicFormComponent, { static: true }) dynamicForm: PoDynamicFormComponent;

  constructor(
    private categoriasService: CategoriasService
  ) { }

  async ngOnInit() {
    await this.getCategoriasOptions();

    this.fields = [
      { property: 'nome_produto', label: 'Nome do produto', required: true, gridColumns: 6, gridSmColumns: 12 },
      { property: 'categoria', label: 'categoria', required: true, gridColumns: 6, gridSmColumns: 12, options: this.categorias },
      { property: 'descricao', label: 'Descrição', required: true, gridColumns: 12, gridSmColumns: 12, rows: 3 },
    ];

    console.log(this.dynamicForm);
  }

  getCategoriasOptions() {
    return new Promise((resolve, reject) => {
      this.categoriasService.getCategorias().subscribe(res => {
        const categorias: Array<PoSelectOption> = res.map(element => {
          return { label: element.nome_categoria, value: element.id };
        });

        this.categorias = categorias;
        resolve();
       });
    });
  }

  getForm(form: NgForm) {
    this.cadastraForm = form;
  }

  teste(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {
    console.log(changedValue);
    return {};
  }
}
