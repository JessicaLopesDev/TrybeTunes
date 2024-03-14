export interface UserState {
  name: string;
  setName: (value: string) => void;
  submitForm: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  getUser: () => void;
}
