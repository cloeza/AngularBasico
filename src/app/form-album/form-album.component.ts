import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Album } from '../models/album';
import { Song } from '../models/song';
import { AlbumnService } from '../services/albumn.service';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-form-album',
  templateUrl: './form-album.component.html',
  styleUrls: ['./form-album.component.scss']
})
export class FormAlbumComponent implements OnInit {
  public albumForm!: FormGroup;
  public base64textString: string = environment.imgDefault;
  public songitems: FormArray;
  @Input() edit: boolean;
  @Input() album: Album;
  @Output() showForm = new EventEmitter<boolean>();
  constructor(
    private fb: FormBuilder,
    private albumnService: AlbumnService,
  ) { }

  ngOnInit(): void {
    this.createForm();
    if (this.edit) {
      this.albumForm.reset({
        name: this.album.name,
        description: this.album.description,
        genre: this.album.genre,
        release: this.album.release,
        price: this.album.price,
      });
      this.base64textString = this.album.img;
      if(this.album.songs !==undefined){
      this.album.songs.forEach(value => {
        this.getSongs.push(
          this.createItemSongEdit(value)
        )
      });
      }
    }
  }

  createItemSong(row: number): FormGroup {
    return this.fb.group({
      id: [row, [Validators.required]],
      name: [, [Validators.required]],
      lenght: [, [Validators.required]],
    });
  }

  createItemSongEdit(row: Song): FormGroup {
    return this.fb.group({
      id: [row.id, [Validators.required]],
      name: [row.name, [Validators.required]],
      lenght: [row.lenght, [Validators.required]],
    });
  }



  private createForm() {
    this.albumForm = this.fb.group({
      name: [, [Validators.required]],
      description: [, [Validators.required]],
      genre: [, [Validators.required]],
      release: [, [Validators.required]],
      price: [, [Validators.required, Validators.min(1)]],
      img: [, null],
      songs: this.fb.array([])
    });
  }

  get getSongs() {
    return this.albumForm.get('songs') as FormArray;
  }

  saveAlbum() {
    let data = this.albumForm.value;
    data.img = this.base64textString;

    if (this.edit != true) {
      this.albumnService.createAlbum(data).subscribe(
        (album) => {
          this.albumForm.reset();
          this.showForm.emit(false);
        },
        (error: any) => {
          console.warn(error);
        }
      )
    } else {
      this.albumnService.updateAlbum(data, this.album.id!).subscribe(
        (album) => {
          this.albumForm.reset();
          this.showForm.emit(false);

        },
        (error: any) => {
          console.warn(error);
        }
      )
    }


  }

  // Carga de imagen
  onProfileChange(event: any) {
    var files = event.target.files;
    var file = files[0];
    if (files && file) {
      var reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  private handleReaderLoaded(readerEvt: any) {
    let binaryString = readerEvt.target.result;
    this.base64textString = 'data:image/png;base64,' + btoa(binaryString);
  }


  AddSong() {
    this.getSongs.push(
      this.createItemSong(this.getSongs.length)
    );
  }

  deleteSong(index: number) {
    this.getSongs.removeAt(index);
  }


  isValidForm(field: string): boolean{
    return !(this.albumForm.controls[field].invalid);
  }

  isInvalidForm(field: string): boolean{
    return this.albumForm.controls[field].invalid && (this.albumForm.controls[field].dirty || this.albumForm.controls[field].touched)
  }
}
