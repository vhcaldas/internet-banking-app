import { Component, OnInit } from '@angular/core';

import { Transferencia } from '../transferencia/interface.transferencia';

@Component({
  selector: 'app-sucesso',
  templateUrl: './sucesso.component.html',
  styleUrls: ['./sucesso.component.css']
})
export class SucessoComponent implements OnInit {

  transferenciaSucesso: Transferencia;
  constructor() { }

  ngOnInit(): void {
    this.transferenciaSucesso = JSON.parse(localStorage.getItem('transferencia'));
    localStorage.removeItem('transferencia');
  }

  onClick(){
    localStorage.removeItem('cliente');
  }
}
