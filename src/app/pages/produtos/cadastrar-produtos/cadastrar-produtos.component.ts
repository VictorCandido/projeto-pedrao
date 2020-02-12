import { CategoriasService } from './../../categorias/categorias.service';
import { Component, OnInit } from '@angular/core';
import { PoDynamicFormField, PoSelectOption } from '@portinari/portinari-ui';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent implements OnInit {
  public fields: Array<PoDynamicFormField>;
  private categorias: Array<PoSelectOption>;

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
}
