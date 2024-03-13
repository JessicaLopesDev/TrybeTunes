import { useUser } from '.';
import { useSearch } from '../useSearch';
import * as api from '../../services/api/user';

const submitForm = (event: any) => {
  const { name } = useUser.getState();
  const { setIsLoading } = useSearch.getState();

  event.preventDefault();
  setIsLoading(true);

  api.createUser({ name }).then(() => {
    setIsLoading(false);
    window.location.href = '/search';
  });
};

export { submitForm };
