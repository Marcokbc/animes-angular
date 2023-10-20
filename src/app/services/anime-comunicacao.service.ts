import { Injectable } from '@angular/core';
import { AnimeData } from '../models/animeData';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeComunicacaoService {

  private animeResultsSubject: Subject<AnimeData[]> = new Subject<AnimeData[]>();

  sendAnimeResults(results: AnimeData[]) {
    this.animeResultsSubject.next(results);
  }

  getAnimeResults() {
    return this.animeResultsSubject.asObservable();
  }
}
