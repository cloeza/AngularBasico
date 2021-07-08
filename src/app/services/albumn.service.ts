import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { albums } from '../data/datas';
import { Album } from './../models/album';
@Injectable({
  providedIn: 'root'
})
export class AlbumnService {

  private api:string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getAlbumns(): Promise<Album[]> {
    return new Promise( ( resolve, reject) =>
    {
      setTimeout(()=> {
        resolve(albums)
      }, 5000)
    })
  }
  
  getAlbum(id: number): Album | undefined {    
    return albums.find(album => album.id === id );
  }

  getAlbumnsHttp(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.api}/albums`);
  }


  getAlbumnHttp(id:number): Observable<Album> {
    return this.http.get<Album>(`${this.api}/albums/${id}`);
  }

  createAlbum(data: Album):Observable<Album>{
    return this.http.post<Album>(`${this.api}/albums`, data);
  }

  updateAlbum(data: Album, id: number):Observable<Album>{
    return this.http.put<Album>(`${this.api}/albums/${id}`, data);
  }

  deleteAlbum(id: number | undefined):Observable<any>{
    return this.http.delete<Album>(`${this.api}/albums/${id}`);
  }
}

