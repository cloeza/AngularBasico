import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListAlbumsComponent } from './list-albums/list-albums.component';
import { AlbumCardComponent } from './album-card/album-card.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { ListSongComponent } from './list-song/list-song.component';
import { routing } from './app.routing';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { HttpClientModule } from '@angular/common/http';
import { FormAlbumComponent } from './form-album/form-album.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListAlbumsComponent,
    AlbumCardComponent,
    AlbumDetailComponent,
    ListSongComponent,
    NotFoundComponent,
    AboutUsComponent,
    FormAlbumComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
