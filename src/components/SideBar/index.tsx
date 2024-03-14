import { useEffect } from 'react';

import { Loading } from '../Loading';

import * as S from './styles';
import { useUser } from '../../hooks/useUser';
import { useSearch } from '../../hooks/useSearch';

export const SideBar = () => {
  const { name, getUser } = useUser();

  useEffect(() => {
    getUser();
  }, []);

  return (
    <S.Container data-testid="header-component">
      <S.Logo src="./images/logo.png" />
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
      </S.NavContainer>
      <S.UserInfoBox>
        <S.UserPhoto src="./images/default-user-icon.jpg" />
        <S.UserName>{name}</S.UserName>
      </S.UserInfoBox>
    </S.Container>
  );
};
