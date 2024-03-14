import { Link } from 'react-router-dom';
import { AlbumCardType } from '../../types';

export const AlbumCard = ({
  artistName,
  collectionId,
  artworkUrl100,
  collectionName,
}: AlbumCardType) => {
  return (
    <Link
      data-testid={`link-to-album-${collectionId}`}
      to={`/album/${collectionId}`}
    >
      <div>
        <img src={artworkUrl100} alt={collectionName} />
        <h3>{collectionName}</h3>
        <span>{artistName}</span>
      </div>
    </Link>
  );
};
