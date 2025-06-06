export interface AuthContextProps {
  logged: boolean;
  user?: {
    id: string;
    name: string;
  };
  login: (name: string) => void;
  logout: () => void;
}
