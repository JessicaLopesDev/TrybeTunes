import { useEffect } from 'react';

import { Loading } from '../Loading';

import * as S from './styles';
import { useUser } from '../../hooks/useUser';
import { useSearch } from '../../hooks/useSearch';

export const SideBar = () => {
  const { name, getUser } = useUser();
  const { isLoading } = useSearch();

  useEffect(() => {
    getUser();
  }, []);

  return (
    <S.Container data-testid="header-component">
      {isLoading ? (
        <Loading />
      ) : (
        <S.Title data-testid="header-user-name">{`Olá ${name}`}</S.Title>
      )}
      <S.NavContainer>
        <S.Navigation to="/search" data-testid="link-to-search">
          Pesquisar
        </S.Navigation>
        <S.Navigation to="/favorites" data-testid="link-to-favorites">
          Favoritas
        </S.Navigation>
        <S.Navigation to="/profile" data-testid="link-to-profile">
          Perfil
        </S.Navigation>
        <S.Navigation to="/profile/edit">Editar perfil</S.Navigation>
      </S.NavContainer>
    </S.Container>
  );
};
