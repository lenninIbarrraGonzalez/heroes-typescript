import React, { useContext } from 'react';
import { AuthContext } from '../auth';
import { Navigate } from 'react-router-dom';

interface PublicRouteProps {
  children: React.ReactNode;
}

export const PublicRoute = ({
  children,
}: PublicRouteProps): React.ReactElement => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('AuthContext.Provider is missing.');
  }
  const { authState } = authContext;
  const { logged } = authState;

  // Si está autenticado, redirige a la raíz; si no, muestra el login
  return logged ? <Navigate to="/" /> : <>{children}</>;
};
