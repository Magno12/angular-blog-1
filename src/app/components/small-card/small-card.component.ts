import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover: string = ""

  @Input()
  cardTitle: string = ""

  @Input()
  Id: string = "0"

  @Input()
  content: string = "true";

  @Input()
  description: string = ""

  __isValideCont: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isValideContent();
  }

  isValideContent() {
    this.__isValideCont = this.content === "false" ? false : true;
  }

}
