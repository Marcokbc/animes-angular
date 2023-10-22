import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AnimeData } from 'src/app/models/animeData';


@Component({
  selector: 'modal-anime',
  templateUrl: './modal-anime.component.html',
  styleUrls: ['./modal-anime.component.css']
})
export class ModalAnimeComponent{

  constructor(
    public dialogRef: MatDialogRef<ModalAnimeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AnimeData,
  ) {}
  close(): void{
    this.dialogRef.close();
  }

}
