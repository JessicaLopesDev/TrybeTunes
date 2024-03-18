import { useSearch } from '../../hooks/useSearch';
import { Loading } from '../../components/Loading';
import { MusicCard } from '../../components/MusicCard';
import { SongType } from '../../types';

import { getFavoriteSongs, removeSong } from '../../services/favoriteSongsAPI';

import * as S from './styles';
import { useEffect } from 'react';
import { useFavorites } from '../../hooks/useFavorites';

export function Favorites() {
  const { isLoading, setIsLoading } = useSearch();
  const { favorites, setFavorites } = useFavorites();

  useEffect(() => {
    handleGetFavoriteSongs();
  }, []);

  const handleGetFavoriteSongs = () => {
    setIsLoading(true);

    getFavoriteSongs().then((songs) => {
      setIsLoading(false);
      setFavorites(songs);
    });
  };

  const handleRemoveFavoriteSong = (music: SongType) => {
    setIsLoading(true);

    removeSong(music).then(() => {
      handleGetFavoriteSongs();
    });
  };
  return (
    <S.Container data-testid="page-favorites">
      {isLoading ? (
        <Loading />
      ) : (
        <S.FavoriteContainer>
          {favorites.map((song) => (
            <MusicCard
              key={`${song.trackName}${song.trackId}`}
              trackName={song.trackName}
              previewUrl={song.previewUrl}
              trackId={song.trackId}
              isChecked
              isFavorite={() => handleRemoveFavoriteSong(song)}
            />
          ))}
        </S.FavoriteContainer>
      )}
    </S.Container>
  );
}
