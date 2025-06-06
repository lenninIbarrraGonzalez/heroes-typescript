import { AuthState } from './AuthState';

export interface AuthContextProps {
  authState: AuthState;
  login: (name?: string) => void;
  logout: () => void;
}
