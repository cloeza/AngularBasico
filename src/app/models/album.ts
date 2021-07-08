import { Genre} from './genre';
import { Song } from './song';
export interface Album{
    id?: number;
    name: string;
    description: string;
    genre: Genre;
    img:string;
    release: Date;
    songs: Song[];
    price: number;
}