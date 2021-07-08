import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public showFormAlbum: boolean = false;
  public testModal: any;
  constructor() { }

  ngOnInit(): void {
  }

  showForm(): void {
    this.showFormAlbum = !this.showFormAlbum;
  }
  onShowForm(show:boolean): void{
    this.showFormAlbum = show; 
  }
}
