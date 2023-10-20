import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AnimeData } from 'src/app/models/animeData';
import { AnimeComunicacaoService } from 'src/app/services/anime-comunicacao.service';

@Component({
  selector: 'anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  animesCards: AnimeData[] = [];
  private animeResultsSubscription: Subscription;

  constructor(private animeCommunicationService: AnimeComunicacaoService) {
    this.animeResultsSubscription = this.animeCommunicationService.getAnimeResults().subscribe((results) => {
      this.animesCards = results;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.animeResultsSubscription.unsubscribe();
  }

}
