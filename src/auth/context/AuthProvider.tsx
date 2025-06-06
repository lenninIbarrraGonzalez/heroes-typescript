import { AuthContext } from './AuthContext';
import { ReactNode, useReducer } from 'react';
import { authReducer } from './authReducer';
import { types } from '../types/types';
import { AuthState } from '../interfaces/AuthState';

const initialState: AuthState = {
  logged: false,
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const login = (name = '') => {
    const action = {
      type: types.login,
      payload: {
        id: 'ABC',
        name: name,
      },
    };
    dispatch(action);
  };

  const logout = () => {
    const action = {
      type: types.logout,
    };
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
