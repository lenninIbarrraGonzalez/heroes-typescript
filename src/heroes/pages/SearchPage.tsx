// import { HeroCard } from '../components';

import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { getHeroByName } from '../helpers';
import { HeroCard } from '../components';

interface SearchFormState {
  searchText: string;
}

interface SearchSubmitEvent extends React.FormEvent<HTMLFormElement> {}

export const SearchPage = () => {
  //obtener la navegacion
  const navigate = useNavigate();
  //obtener información de la ubicación actual
  const location = useLocation();
  //libreria para parsear la ruta query-string

  const query = queryString.parse(location.search);
  const { q = '' } = query;

  const heroes = getHeroByName(typeof q === 'string' ? q : '');

  console.log({ heroes });

  const { formState, onInputChange } = useForm<SearchFormState>({
    searchText: typeof q === 'string' ? q : '',
  });

  const { searchText } = formState;

  const onSearchSubmit = (e: SearchSubmitEvent): void => {
    e.preventDefault();

    // if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>SearchPage</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button type="submit" className="btn btn-outline-primary mt-2">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === '' && (
            <div className="alert alert-primary animate__animated animate__fadeIn">
              Search a hero
            </div>
          )}

          {q !== '' && heroes.length === 0 && (
            <div className="alert alert-danger animate__animated animate__fadeIn">
              No hero whit <b>{q}</b>
            </div>
          )}

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
