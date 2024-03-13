import React from 'react';
import { useSearch } from '../../hooks/useSearch';

import * as S from './styles';

export const Header = () => {
  const {
    setIsLoading,
    setArtistName,
    searchInputValue,
    setSearchInputValue,
    getAlbums,
  } = useSearch();

  const minCharacter = 2;
  const isButtonDisable = searchInputValue.length >= minCharacter;

  const onInputChange = (value: string) => {
    setArtistName(value);
    setSearchInputValue(value);
  };

  const onSubmitForm = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    setIsLoading(false);
    setSearchInputValue('');
    getAlbums();
  };

  return (
    <S.Container>
      <S.Form data-testid="page-login">
        <S.Input
          data-testid="search-artist-input"
          type="text"
          value={searchInputValue}
          onChange={({ target }) => onInputChange(target.value)}
          placeholder="DIGITE A SUA PESQUISA"
        />

        <S.Button
          data-testid="search-artist-button"
          type="submit"
          disabled={!isButtonDisable}
          onClick={onSubmitForm}
        >
          PROCURAR
        </S.Button>
      </S.Form>
    </S.Container>
  );
};
