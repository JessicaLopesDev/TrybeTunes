import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Loading } from '../Loading';
import { getUser } from '../../services/api/user';
import { UserType } from '../../types';

export function Header() {
  const minCharacter = 2;
  const isButtonDisable = artistName.length >= minCharacter;
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserType>({
    name: '',
    email: '',
    image: '',
    description: '',
  });

  useEffect(() => {
    const getUserData = async () => {
      setIsLoading(true);
      const result = await getUser();
      setUser(result);
      setIsLoading(false);
    };
    getUserData();
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setArtistName(value);
    setInputValue(value);
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
        <header data-testid="header-component">
          <NavLink data-testid="link-to-search" to="/search">
            Procurar
          </NavLink>
          <NavLink data-testid="link-to-favorites" to="/favorites">
            Favoritos
          </NavLink>
          <NavLink data-testid="link-to-profile" to="/profile">
            Perfil
          </NavLink>
          <h4 data-testid="header-user-name">{user.name}</h4>
        </header>
      )}
    </div>
  );
}
