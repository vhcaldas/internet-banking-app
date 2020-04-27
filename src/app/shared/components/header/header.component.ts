import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 @Input() clienteNome: string;
 @Input() clienteAgencia: string;
 @Input() clienteConta: string;

  data = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
