import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const LoginPage = () => {
  const navigator = useNavigate();
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('AuthContext.Provider is missing.');
  }
  const { login } = authContext;

  const onLogin = () => {
    login('Lennin Ibarra');
    const lastPast = localStorage.getItem('lastPage');

    navigator(lastPast || '/', { replace: true });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
