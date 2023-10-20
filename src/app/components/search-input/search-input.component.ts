import { Component, OnInit } from '@angular/core';
import { AnimeComunicacaoService } from 'src/app/services/anime-comunicacao.service';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'search-input',
  template: '<input id="search-input" type="text" [(ngModel)]="animeSearch" (input)="onInputChange()" placeholder="Digite um anime..."/>',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  animeSearch: string = '';

  constructor(private animeService: AnimeService, private animeCommunicationService: AnimeComunicacaoService) { }

  ngOnInit(): void {
  }

  onInputChange() {
    this.animeService.getAnimes(this.animeSearch).subscribe((results) => {
      this.animeCommunicationService.sendAnimeResults(results);
    });
  }

}
