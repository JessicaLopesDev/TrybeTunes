import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../../services/musicsAPI';
import { AlbumType, SongType } from '../../types';
import { Loading } from '../../components/Loading';
import { MusicCard } from '../../components/MusicCard';
// import { addSong, removeSong } from '../../services/favoriteSongsAPI';

export function Album() {
  const [musics, setMusics] = useState<[AlbumType, ...SongType[]]>();
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  const idParam = String(id);

  const isFavoriteSong = (favoriteId: number) => favorites
    .some((songId) => songId === favoriteId);

  const addFavoriteSong = (favoriteId: number) => {
    if (isFavoriteSong(favoriteId)) {
      const filtered = favorites.filter((songId) => songId !== favoriteId);
      setFavorites(filtered);
    } else {
      setFavorites([...favorites, favoriteId]);
    }
  };

  // const addFavoriteSong = (music: SongType) => {
  //   setIsLoading(true);
  //   setMusicIds([...musicIds, music.trackId]);

  //   addSong(music).then(() => {
  //     setIsLoading(false);
  //   });
  // };

  // const removeFavoriteSong = (music: SongType) => {
  //   const filteredIds = musicIds.filter((musicId) => musicId !== music.trackId);
  //   setMusicIds(filteredIds);
  //   setIsLoading(true);

  //   removeSong(music).then(() => {
  //     setIsLoading(false);
  //   });
  // };

  // const handleFavoriteSong = (music: SongType, checked: boolean) => {
  //   if (checked) {
  //     addFavoriteSong(music);
  //   } else {
  //     removeFavoriteSong(music);
  //   }
  // };

  useEffect(() => {
    const handleGetMusics = async () => {
      setIsLoading(true);
      const data = await getMusics(idParam);
      setMusics(data);
      setIsLoading(false);
    };
    handleGetMusics();
  }, [idParam]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        musics
        && !!musics.length && (
          <div>
            <h3 data-testid="artist-name">{musics[0].artistName}</h3>
            <p data-testid="album-name">{musics[0].collectionName}</p>
            {musics.map((music, index) => {
              if (index > 0) {
                return (
                  <MusicCard
                    key={
                      'trackId' in music ? music.trackId : music.collectionId
                    }
                    trackName={ 'trackName' in music ? music.trackName : '' }
                    previewUrl={ 'previewUrl' in music ? music.previewUrl : '' }
                    trackId={ 'trackId' in music ? music.trackId : 0 }
                    isFavorite={ addFavoriteSong }
                    isChecked={ isFavoriteSong }
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
