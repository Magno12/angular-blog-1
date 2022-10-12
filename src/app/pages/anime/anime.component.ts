import { Component, OnInit } from '@angular/core';
import { dataFakeAnime } from 'src/app/data/dataFakeAnime';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  photoCover: string = "https://bignadaquasar.files.wordpress.com/2014/11/naruto-shippuden-o-filme-a-morte-de-naruto.jpg";

  listaNaruto = [
    {
      id: "",
      title: "",
      description: "",
      photoCover: "",
    }
  ]

  listableach = [
    {
      id: "",
      title: "",
      description: "",
      photoCover: "",
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.getValueAll();
  }

  getValueAll() {
    dataFakeAnime.filter(element => {
      const a = element;
      this.listaNaruto = a.naruto;
      this.listableach = a.bleach;
    });
  }
}

