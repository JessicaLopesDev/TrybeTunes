import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/userAPI';
import { Loading } from '../../components/Loading';

export function Login() {
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const minCharacter = 3;
  const isButtonDisable = userName.length >= minCharacter;
  const navigate = useNavigate();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    createUser({ name: userName }).then(() => {
      setIsLoading(false);
      navigate('/search');
    });
  };

  return (
    <form
      data-testid="page-login"
      onSubmit={ handleSubmitForm }
    >
      <input
        data-testid="login-name-input"
        type="text"
        name="name"
        placeholder="Digite seu nome aqui"
        value={ userName }
        onChange={ handleInputChange }
      />

      <button
        data-testid="login-submit-button"
        type="submit"
        disabled={ !isButtonDisable }
      >
        Entrar
      </button>

      {
          isLoading && <Loading />
      }
    </form>
  );
}
