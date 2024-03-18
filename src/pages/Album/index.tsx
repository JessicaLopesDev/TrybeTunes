import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../../services/musicsAPI';
import { AlbumType, SongType } from '../../types';
import { Loading } from '../../components/Loading';
import { MusicCard } from '../../components/MusicCard';
import { useSearch } from '../../hooks/useSearch';
import { addSong, removeSong } from '../../services/favoriteSongsAPI';
import { A } from 'vitest/dist/types-e3c9754d';

export function Album() {
  const {
    musics,
    setMusics,
    isLoading,
    setIsLoading,
    favoritesIds,
    setFavoritesIds,
  } = useSearch();
  const [albumData, setAlbumData] = useState<AlbumType | null>(null);

  const { id } = useParams();
  const idParam = String(id);

  // const isFavoriteSong = (favoriteId: number) =>
  //   favorites.some((songId) => songId === favoriteId);

  // const addFavoriteSong = (favoriteId: number) => {
  //   if (isFavoriteSong(favoriteId)) {
  //     const filtered = favorites.filter((songId) => songId !== favoriteId);
  //     setFavorites(filtered);
  //   } else {
  //     setFavorites([...favorites, favoriteId]);
  //   }
  // };

  const addFavoriteSong = (music: SongType) => {
    setIsLoading(true);
    setFavoritesIds([...favoritesIds, music.trackId]);

    addSong(music).then(() => {
      setIsLoading(false);
    });
  };

  const removeFavoriteSong = (music: SongType) => {
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

  useEffect(() => {
    const handleGetMusics = async () => {
      setIsLoading(true);
      const data = await getMusics(idParam);
      setAlbumData(data[0]);
      const musicsData = data.slice(1) as SongType[];
      setMusics(musicsData);
      setIsLoading(false);
    };
    handleGetMusics();
  }, [idParam]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        musics &&
        !!musics.length && (
          <div>
            <h3 data-testid="artist-name">{albumData?.artistName}</h3>
            <p data-testid="album-name">{albumData?.collectionName}</p>
            {musics.map((music, index) => {
              if (index > 0) {
                return (
                  <MusicCard
                    key={music.trackId}
                    trackName={'trackName' in music ? music.trackName : ''}
                    previewUrl={'previewUrl' in music ? music.previewUrl : ''}
                    trackId={'trackId' in music ? music.trackId : 0}
                    isFavorite={() => removeFavoriteSong(music)}
                    isChecked
                  />
                );
              }
              return null;
            })}
          </div>
        )
      )}
    </div>
  );
}
