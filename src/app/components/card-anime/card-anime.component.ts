import { Component, Input, OnInit } from '@angular/core';
import { AnimeData } from 'src/app/models/animeData';
import { ModalAnimeComponent } from '../modal-anime/modal-anime.component';
import { MatDialog, MatDialogModule , MatDialogConfig} from '@angular/material/dialog';


@Component({
  selector: 'card-anime',
  templateUrl: './card-anime.component.html',
  styleUrls: ['./card-anime.component.css'],
})
export class CardAnimeComponent implements OnInit {

  @Input()
  animes: AnimeData

  constructor(public dialog: MatDialog) { 
    this.animes = {} as AnimeData;
  }
  
  ngOnInit(): void {
  }

  openDialog(anime: AnimeData) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    let dialogRef = this.dialog.open(ModalAnimeComponent, {
      data: anime
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}
