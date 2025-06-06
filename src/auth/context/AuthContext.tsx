import { createContext } from 'react';

import { AuthContextProps } from '../interfaces/AuthContextProps';

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined,
);
