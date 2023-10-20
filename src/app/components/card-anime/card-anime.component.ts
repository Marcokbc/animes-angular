import { Component, Input, OnInit } from '@angular/core';
import { AnimeData } from 'src/app/models/animeData';

@Component({
  selector: 'card-anime',
  templateUrl: './card-anime.component.html',
  styleUrls: ['./card-anime.component.css']
})
export class CardAnimeComponent implements OnInit {

  @Input()
  animes: AnimeData

  constructor() { 
    this.animes = {} as AnimeData;
  }
  
  ngOnInit(): void {
  }

}
