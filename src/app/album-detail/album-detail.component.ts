import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumnService } from './../services/albumn.service';
import { Album } from './../models/album';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {
  public albumFilter: Album | undefined;
  public showFormAlbum: boolean = false;
  constructor(
    private albumnService: AlbumnService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.albumFilter =  this.albumnService.getAlbum(parseInt(this.activatedRoute.snapshot.params['id']));    
    // if(this.albumFilter === undefined){
    //   this.router.navigate(['']);
    // }    
    this.reloadInfo()
  }

  reloadInfo(): void{
    this.albumnService.getAlbumnHttp(parseInt(this.activatedRoute.snapshot.params['id']))
    .subscribe(
      (album: Album) => {
        this.albumFilter = album;
      }, (error: HttpErrorResponse) => {
        console.warn(error);
        this.router.navigate(['']);
      }
    )

  }

  onShowForm(show:boolean): void{
    this.showFormAlbum = show; 
    this.reloadInfo();
  }


  deleteAlbum():void{
    this.albumnService.deleteAlbum(this.albumFilter!.id).subscribe((data)=>
    {
      this.router.navigate(['']);
    });
    
  }
}
