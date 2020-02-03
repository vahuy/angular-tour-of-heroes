import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-castles',
  templateUrl: './castles.component.html',
  styleUrls: ['./castles.component.css']
})
export class CastlesComponent implements OnInit {

  castle = 'The Maison';

  constructor() { }

  ngOnInit() {
  }

}
