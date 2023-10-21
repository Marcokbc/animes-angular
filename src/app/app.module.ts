import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { CardAnimeComponent } from './components/card-anime/card-anime.component';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { ModalAnimeComponent } from './components/modal-anime/modal-anime.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    CardAnimeComponent,
    AnimeListComponent,
    ModalAnimeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [MatDialog,],
  bootstrap: [AppComponent]
})
export class AppModule { }
