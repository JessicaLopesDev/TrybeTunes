import { Link } from 'react-router-dom';
import { AlbumCardType } from '../../types';

import * as S from './styles';

export const AlbumCard = ({
  artistName,
  collectionId,
  artworkUrl100,
  collectionName,
}: AlbumCardType) => {
  return (
    <S.Container
      data-testid={`link-to-album-${collectionId}`}
      to={`/album/${collectionId}`}
    >
      <S.Content>
        <S.Img
          style={{
            backgroundImage: `url(${artworkUrl100})`,
            backgroundSize: 'cover',
          }}
        />
        <S.InfoBox>
          <S.AlbumName>{collectionName}</S.AlbumName>
          <S.ArtistName>{artistName}</S.ArtistName>
        </S.InfoBox>
      </S.Content>
    </S.Container>
  );
};
