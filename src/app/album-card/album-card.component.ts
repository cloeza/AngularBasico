import { Component, Input, OnInit } from '@angular/core';
import { Album } from './../models/album';
@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {
  // al usar el decorador input 
  // me crea un atributo 
  // a mi clase hijo

  public styleCard: boolean = true;
  public colorOne:string = 'blue';
  public colorTwo:string = 'green';
  public promesa: any;

  public showSong:boolean = false;
  @Input() album!: Album
  @Input() showDetails!: boolean 
  
  constructor() { }
  

  ngOnInit(): void {
    
  }

  showList(){
    this.showSong = !this.showSong;
  }
}
