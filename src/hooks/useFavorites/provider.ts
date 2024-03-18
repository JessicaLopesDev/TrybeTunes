import * as api from '../../services/api/search';
import { addSong, removeSong } from '../../services/favoriteSongsAPI';
import { SongType } from '../../types';
import { useFavorites } from '../useFavorites';
import { useSearch } from '../useSearch';

const addFavoriteSong = (music: SongType) => {
  const { setIsLoading } = useSearch.getState();
  const { favoritesIds, setFavoritesIds } = useFavorites.getState();
  setIsLoading(true);
  setFavoritesIds([...favoritesIds, music.trackId]);

  addSong(music).then(() => {
    setIsLoading(false);
  });
};

const removeFavoriteSong = (music: SongType) => {
  const { setIsLoading } = useSearch.getState();
  const { favoritesIds, setFavoritesIds } = useFavorites.getState();
  const filteredIds = favoritesIds.filter(
    (musicId) => musicId !== music.trackId,
  );
  setFavoritesIds(filteredIds);
  setIsLoading(true);

  removeSong(music).then(() => {
    setIsLoading(false);
  });
};

const handleFavoriteSong = (music: SongType, checked: boolean) => {
  if (checked) {
    addFavoriteSong(music);
  } else {
    removeFavoriteSong(music);
  }
};

export { addFavoriteSong, removeFavoriteSong, handleFavoriteSong };
