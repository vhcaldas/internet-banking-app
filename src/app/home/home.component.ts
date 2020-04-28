import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { LoginResponse } from '../login/interface.login.response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 cliente: LoginResponse;


  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    this.cliente = JSON.parse(localStorage.getItem('cliente'));

  }
}
