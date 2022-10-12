import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string | null = ""
  contentTitle: string = ""
  contentDescription: string = ""
  private id: string | null = "0"

  private pachAnime = ""
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //  console.log("pach", document.location.pathname);
    //  document.location.origin
    this.pachAnime = document.location.pathname;


    this.route.paramMap.subscribe(value => {
      this.id = value.get("id")
      this.photoCover = value.get("photoCover")
      /* console.log("ng onit", value.get("title"))
      console.log(this.photoCover) */
    })

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id == id)[0]
    console.log(result)
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }
}
