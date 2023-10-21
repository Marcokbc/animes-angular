import { Component, Input, OnInit } from '@angular/core';
import { AnimeData } from 'src/app/models/animeData';
import { ModalAnimeComponent } from '../modal-anime/modal-anime.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'card-anime',
  templateUrl: './card-anime.component.html',
  styleUrls: ['./card-anime.component.css']
})
export class CardAnimeComponent implements OnInit {

  @Input()
  animes: AnimeData

  constructor(private dialog: MatDialog) { 
    this.animes = {} as AnimeData;
  }
  
  ngOnInit(): void {
  }

  openModal(anime: AnimeData) {
    const dialogRef = this.dialog.open(ModalAnimeComponent, {
      data: anime, 
    });
  }

}
