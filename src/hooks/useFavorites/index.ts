import { create } from 'zustand';
import { FavoriteState } from './types';
import { handleFavoriteSong } from './provider';

export const useFavorites = create<FavoriteState>((set) => ({
  favorites: [],
  setFavorites: (value) => set({ favorites: value }),

  favoritesIds: [],
  setFavoritesIds: (value) => set({ favoritesIds: value }),

  handleFavoriteSong,
}));
