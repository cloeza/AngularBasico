import { Component, OnInit } from '@angular/core';
import { albums } from '../data/datas';
import { AlbumnService } from '../services/albumn.service'
import { Album } from './../models/album';
@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.scss']
})
export class ListAlbumsComponent implements OnInit {
  public listAlbums: Album[] = [];
  public loading: boolean = true;
  constructor(
    private serviceAlbum: AlbumnService
  ) { }

  ngOnInit(): void {
    // this.serviceAlbum.getAlbumns().then(
    //     (albumnes) =>{ 
    //       this.listAlbums = albumnes;
    //       this.loading = false;
    //     }
    // )
    this.reloadInfo();  
  }


  reloadInfo(){
    this.serviceAlbum.getAlbumnsHttp().subscribe(
      ((albumnes: Album[]) => {
        this.listAlbums = albumnes;
        this.loading = false;
      })
    );
  }
}
