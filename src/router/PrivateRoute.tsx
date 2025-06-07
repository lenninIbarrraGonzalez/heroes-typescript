import { JSX, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth';

interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: PrivateRouteProps): JSX.Element => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('AuthContext.Provider is missing.');
  }

  const { authState } = authContext;
  const { logged } = authState;

  return logged ? children : <Navigate to="/login" />;
};
