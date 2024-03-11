/* eslint-disable import/no-unresolved */
import React from 'react';
import emptyHeart from '../../images/empty_heart.png';
import checkedHeart from '../../images/checked_heart.png';

type MusicCardProps = {
  trackName: string;
  previewUrl: string;
  trackId: number;
  isFavorite: (favoriteId: number) => void;
  isChecked: (favoriteId: number) => boolean;
};

export function MusicCard({
  previewUrl,
  trackName,
  trackId,
  isFavorite,
  isChecked,
}: MusicCardProps) {
  return (
    <div>
      <span>{trackName}</span>

      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        {' '}
        <code>audio</code>
        .
      </audio>

      <label
        data-testid={ `checkbox-music-${trackId}` }
        htmlFor={ `favorite-${trackId}` }
      >
        {isChecked(trackId) ? (
          <img src={ checkedHeart } alt="favorite" />
        ) : (
          <img src={ emptyHeart } alt="favorite" />
        )}
        <input
          type="checkbox"
          hidden
          id={ `favorite-${trackId}` }
          checked={ isChecked(trackId) }
          onChange={ () => isFavorite(trackId) }
        />
      </label>
    </div>
  );
}
