import { create } from 'zustand';
import { getAlbums } from './provider';
import { SearchState } from './types';

export const useSearch = create<SearchState>((set) => ({
  isLoading: false,
  setIsLoading: (value) => set({ isLoading: value }),

  albums: [],
  setAlbums: (value) => set({ albums: value }),

  musics: [],
  setMusics: (value) => set({ musics: value }),

  searchInputValue: '',
  setSearchInputValue: (value) => set({ searchInputValue: value }),

  artistName: '',
  setArtistName: (value) => set({ artistName: value }),

  getAlbums,
}));
