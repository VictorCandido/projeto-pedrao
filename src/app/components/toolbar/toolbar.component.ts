import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  title: string;
  constructor() {
    this.title = 'Cadastro de Produtos';
  }

  ngOnInit() {
  }

}
