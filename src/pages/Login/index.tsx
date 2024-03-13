import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/api/user';
import { Loading } from '../../components/Loading';

import * as S from './styles';
import { useSearch } from '../../hooks/useSearch';
import { useUser } from '../../hooks/useUser';

export const Login = () => {
  const { name, setName } = useUser();
  const { isLoading, setIsLoading } = useSearch();
  const minCharacter = 3;
  const isButtonDisable = name.length >= minCharacter;
  const navigate = useNavigate();

  const handleSubmitForm = (event: any) => {
    event.preventDefault();
    setIsLoading(true);

    createUser({ name }).then(() => {
      setIsLoading(false);
      navigate('/search');
    });
  };

  return (
    <S.Container data-testid="page-login">
      <S.Content>
        <S.InputBox>
          <S.Logo src="./images/logo.png" />
          <S.InputContent>
            <S.Input
              data-testid="login-name-input"
              type="text"
              name="name"
              placeholder="qual é o seu nome?"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />

            <S.Button
              data-testid="login-submit-button"
              type="submit"
              disabled={!isButtonDisable}
              onClick={handleSubmitForm}
            >
              ENTRAR
            </S.Button>
          </S.InputContent>
        </S.InputBox>

        {isLoading && <Loading />}
      </S.Content>
    </S.Container>
  );
};
