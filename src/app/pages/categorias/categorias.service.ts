import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor() { }

  getItems(): any[] {
    return [
      { id: 1, nome_categoria: 'CATEGORIA 1' },
      { id: 2, nome_categoria: 'CATEGORIA 2' },
      { id: 3, nome_categoria: 'CATEGORIA 3' },
      { id: 4, nome_categoria: 'CATEGORIA 4' },
      { id: 5, nome_categoria: 'CATEGORIA 5' },
    ];
  }
}
