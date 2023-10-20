import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AnimeData } from '../models/animeData';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private baseURL:string = "";

  constructor(private http:HttpClient){
    this.baseURL  = environment.animeApi;
  }

  getAnimes(animeName: string): Observable<AnimeData[]> {
    return this.http.get<any>(`${this.baseURL}${animeName}`).pipe(
      map((data: any) => {
        return data.data.map((item: any) => {
          const anime: AnimeData = {
            name: item.attributes.canonicalTitle,
            imageURL: item.attributes.posterImage.small
          };
          return anime;
        });
      })
    );
  }
  

}
