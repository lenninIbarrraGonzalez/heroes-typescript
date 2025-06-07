import { AuthContext } from './AuthContext';
import { ReactNode, useReducer } from 'react';
import { authReducer } from './authReducer';
import { types } from '../types/types';
// import { AuthState } from '../interfaces/AuthState';

// const initialState: AuthState = {
//   logged: false,
// };

//funcion de inicialización
const init = () => {
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  if (user) {
    return {
      logged: true,
      user: user,
    };
  } else {
    return {
      logged: false,
      user: null,
    };
  }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = (name = '') => {
    const user = {
      id: 'ABC',
      name: name,
    };

    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem('user', JSON.stringify(user));

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
