import { CategoriasService } from './../../categorias/categorias.service';
import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import {
  PoDynamicFormField,
  PoSelectOption,
  PoDynamicFormFieldChanged,
  PoDynamicFormComponent,
  PoDynamicFormFieldValidation
} from '@portinari/portinari-ui';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent implements OnInit {
  public fields: Array<PoDynamicFormField>;
  private categorias: Array<PoSelectOption>;
  private nomeProduto: string;
  private categoria: string;
  private descricao: string;

  @Output() form = new EventEmitter();
  @ViewChild(PoDynamicFormComponent, { static: true }) dynamicForm: PoDynamicFormComponent;

  constructor(
    private categoriasService: CategoriasService
  ) { }

  async ngOnInit() {
    await this.getCategoriasOptions();

    this.fields = [
      { property: 'nome_produto', label: 'Nome do produto', required: true, gridColumns: 6, gridSmColumns: 12, validate: this.changeCampo },
      { property: 'categoria', label: 'categoria', required: true, gridColumns: 6, gridSmColumns: 12, options: this.categorias, validate: this.changeCampo },
      { property: 'descricao', label: 'Descrição', required: true, gridColumns: 12, gridSmColumns: 12, rows: 3, validate: this.changeCampo },
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

  changeCampo(changedValue: PoDynamicFormFieldChanged): PoDynamicFormFieldValidation {
    if (changedValue.property === 'nome_produto') {
      this.nomeProduto = changedValue.value;
    } else if (changedValue.property === 'categoria') {
      this.categoria = changedValue.value;
    } else {
      this.descricao = changedValue.value;
    }

    this.enviaForm();
    return {};
  }

  enviaForm() {
    this.form.emit({
      nomeProduto: this.nomeProduto,
      categoria: this.categoria,
      descricao: this.descricao
    });
  }
}
