import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../../services/musicsAPI';
import { AlbumType, SongType } from '../../types';
import { Loading } from '../../components/Loading';
import { MusicCard } from '../../components/MusicCard';
import { useSearch } from '../../hooks/useSearch';
import { addSong, removeSong } from '../../services/favoriteSongsAPI';
import { useFavorites } from '../../hooks/useFavorites';

export function Album() {
  const { musics, setMusics, isLoading, setIsLoading } = useSearch();
  const [albumData, setAlbumData] = useState<AlbumType | null>(null);
  const { favoritesIds, handleFavoriteSong } = useFavorites();

  const { id } = useParams();
  const idParam = String(id);

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
                    isFavorite={({ target }) =>
                      handleFavoriteSong(music, target.checked)
                    }
                    isChecked={favoritesIds.includes(music.trackId)}
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
