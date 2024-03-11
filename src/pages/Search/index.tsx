import React, { ChangeEvent, FormEvent, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Loading } from '../../components/Loading';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import { AlbumType } from '../../types';

export function Search() {
  const [artistName, setArtistName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [albums, setAlbums] = useState<AlbumType[]>([]);
  const minCharacter = 2;
  const isButtonDisable = artistName.length >= minCharacter;
  // const navigate = useNavigate();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setArtistName(value);
    setInputValue(value);
  };

  const getAlbums = async () => {
    const artistAlbums = await searchAlbumsAPI(artistName);

    setAlbums(artistAlbums);
    setIsLoading(false);
  };

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInputValue('');
    setIsLoading(true);
    getAlbums();
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <form data-testid="page-search" onSubmit={ handleSubmitForm }>
            <input
              data-testid="search-artist-input"
              type="text"
              name="name"
              value={ inputValue }
              onChange={ handleInputChange }
            />

            <button
              data-testid="search-artist-button"
              type="submit"
              disabled={ !isButtonDisable }
            >
              Pesquisar
            </button>
          </form>

          {!!albums
            && (!albums.length ? (
              <h3>Nenhum álbum foi encontrado</h3>
            ) : (
              <>
                <h3>{`Resultado de álbuns de: ${artistName}`}</h3>
                {albums.map((album) => (
                  <Link
                    key={ `${album.collectionId}-${album.artworkUrl100}` }
                    data-testid={ `link-to-album-${album.collectionId}` }
                    to={ `/album/${album.collectionId}` }
                  >
                    <div>
                      <img
                        src={ album.artworkUrl100 }
                        alt={ album.collectionName }
                      />
                      <h3>{ album.collectionName }</h3>
                      <span>{ artistName }</span>
                    </div>
                  </Link>
                ))}
              </>
            ))}
        </>
      )}
    </div>
  );
}
