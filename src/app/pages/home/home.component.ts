import { dataFake } from './../../data/dataFake';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lista = [
    {
      "id": "",
      "title": "",
      "description": "",
      "photoCover": ""
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.getValuesComponent();
  }


  //buscando informações no dataFake
  getValuesComponent() {
    this.lista = dataFake.filter(result =>
      result
    )
/* 
    console.log("lista", this.lista) */
  }

}
