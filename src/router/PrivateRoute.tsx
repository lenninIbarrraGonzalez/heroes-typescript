import { JSX, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth';

interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: PrivateRouteProps): JSX.Element => {
  const location = useLocation();
  const { pathname, search } = location;

  const lastPage = pathname + search;

  localStorage.setItem('lastPage', lastPage);

  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('AuthContext.Provider is missing.');
  }

  const { authState } = authContext;
  const { logged } = authState;

  return logged ? children : <Navigate to="/login" />;
};
