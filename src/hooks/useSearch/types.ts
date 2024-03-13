import { AlbumType, SongType } from './../../types';

export interface SearchState {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;

  artistName: string;
  setArtistName: (value: string) => void;

  searchInputValue: string;
  setSearchInputValue: (value: string) => void;

  albums: AlbumType[];
  setAlbums: (value: AlbumType[]) => void;

  musics: SongType[];
  setMusics: (value: SongType[]) => void;

  getAlbums: () => void;
}
