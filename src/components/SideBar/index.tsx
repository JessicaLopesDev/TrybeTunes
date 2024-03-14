import { useEffect } from 'react';

import { Loading } from '../Loading';

import * as S from './styles';
import { useUser } from '../../hooks/useUser';
import { useSearch } from '../../hooks/useSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faStar, faUser } from '@fortawesome/free-regular-svg-icons';

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
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          Pesquisar
        </S.Navigation>
        <S.Navigation to="/favorites" data-testid="link-to-favorites">
          <FontAwesomeIcon icon={faStar} />
          Favoritas
        </S.Navigation>
        <S.Navigation to="/profile" data-testid="link-to-profile">
          <FontAwesomeIcon icon={faUser} />
          Editar perfil
        </S.Navigation>
      </S.NavContainer>
      <S.UserInfoBox>
        <S.UserPhoto src="./images/default-user-icon.jpg" />
        <S.UserName>{name}</S.UserName>
      </S.UserInfoBox>
    </S.Container>
  );
};
