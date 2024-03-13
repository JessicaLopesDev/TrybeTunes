import { Loading } from '../../components/Loading';
import { useSearch } from '../../hooks/useSearch';
import { useUser } from '../../hooks/useUser';

import * as S from './styles';

export const Login = () => {
  const { name, setName, submitForm } = useUser();
  const { isLoading } = useSearch();
  const minCharacter = 3;
  const isButtonDisable = name.length >= minCharacter;

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
              onClick={submitForm}
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
