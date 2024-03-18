import { Loading } from '../../components/Loading';
import { useSearch } from '../../hooks/useSearch';
import { AlbumCard } from '../../components/AlbumCard';

import * as S from './styles';
import { useState } from 'react';

export function Search() {
  const { albums, isLoading, artistName, title } = useSearch();

  return (
    <S.Container data-testid="page-search">
      {isLoading ? (
        <Loading />
      ) : (
        !!albums &&
        (!albums.length ? (
          <S.Title>{title}</S.Title>
        ) : (
          <S.Content>
            <S.Title>{`Resultado de álbuns de: ${artistName}`}</S.Title>
            <S.CardBox>
              {albums.map((album) => (
                <AlbumCard
                  key={album.collectionId}
                  artistName={album.artistName}
                  collectionId={album.collectionId}
                  collectionName={album.collectionName}
                  artworkUrl100={album.artworkUrl100}
                />
              ))}
            </S.CardBox>
          </S.Content>
        ))
      )}
    </S.Container>
  );
}
