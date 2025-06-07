import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../../index.css';
import { useContext } from 'react';
import { AuthContext } from '../../auth';

export const Navbar = () => {
  const navigator = useNavigate();

  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('AuthContext.Provider is missing.');
  }

  const { authState, logout } = authContext;
  const { user } = authState;

  const onLogout = () => {
    logout();

    navigator('/login', {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">{user?.name}</span>
        </ul>
        <button className="nav-item nav-link btn text-white" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};
