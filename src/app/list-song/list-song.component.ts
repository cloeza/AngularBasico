import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-song',
  templateUrl: './list-song.component.html',
  styleUrls: ['./list-song.component.scss']
})
export class ListSongComponent implements OnInit {

  @Input() list!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
