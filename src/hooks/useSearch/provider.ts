import { useSearch } from '.';
import * as api from '../../services/api/search';

const getAlbums = () => {
  const { setAlbums, setIsLoading, artistName } = useSearch.getState();

  setIsLoading(true);

  api
    .getAlbumsAPI(artistName)
    .then((albums) => {
      setAlbums(albums);
    })
    .finally(() => {
      setIsLoading(false);
    });
};

export { getAlbums };
