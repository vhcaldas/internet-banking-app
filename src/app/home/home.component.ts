import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginResponse } from '../login/interface.login.response';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 cliente: LoginResponse;



  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.cliente = nav.extras.state.cliente;
   }

  ngOnInit(): void {
  console.log(this.cliente.Agencia);
  }
}
