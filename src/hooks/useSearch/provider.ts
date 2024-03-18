import { useSearch } from '.';
import * as api from '../../services/api/search';

const getAlbums = () => {
  const { setAlbums, setIsLoading, artistName, setTitle } =
    useSearch.getState();

  setIsLoading(true);

  api
    .getAlbumsAPI(artistName)
    .then((albums) => {
      !albums.length && setTitle('Nenhum álbum foi encontrado');
      setAlbums(albums);
    })
    .finally(() => {
      setIsLoading(false);
    });
};

export { getAlbums };
