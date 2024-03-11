import { create } from 'zustand';
import { getAlbums } from './provider';

export const useSearch = create((set) => ({
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
