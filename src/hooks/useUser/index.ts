import { create } from 'zustand';
import { UserState } from './types';
import { submitForm, getUser } from './provider';

export const useUser = create<UserState>((set) => ({
  name: '',
  setName: (value) => set({ name: value }),
  submitForm,
  getUser,
}));
