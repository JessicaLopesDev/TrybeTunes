import { SongType } from '../../types';

export interface FavoriteState {
  favorites: SongType[];
  setFavorites: (value: SongType[]) => void;

  favoritesIds: number[];
  setFavoritesIds: (value: number[]) => void;

  handleFavoriteSong: (music: SongType, checked: boolean) => void;
}
