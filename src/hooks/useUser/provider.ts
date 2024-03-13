import { useNavigate } from 'react-router-dom';
import { useUser } from '.';
import { useSearch } from '../useSearch';
import * as api from '../../services/api/user';

const submitForm = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  const { name } = useUser.getState();
  const { setIsLoading } = useSearch.getState();
  const navigate = useNavigate();

  event.preventDefault();
  setIsLoading(true);

  api.createUser({ name }).then(() => {
    setIsLoading(false);
    navigate('/search');
  });
};

export { submitForm };
