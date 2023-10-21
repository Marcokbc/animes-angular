import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnimeData } from 'src/app/models/animeData';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'modal-anime',
  templateUrl: './modal-anime.component.html',
  styleUrls: ['./modal-anime.component.css']
})
export class ModalAnimeComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: AnimeData, private dialog: MatDialog) {
    this.data = {} as AnimeData; // Valor padrão ou vazio
  }

  ngOnInit(): void {
  }

}
