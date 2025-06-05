import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';
import { useMemo } from 'react';
import { Hero } from '../interfaces/Hero';

export const HeroPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const hero: Hero | undefined = useMemo(() => getHeroById(id ?? ''), [id]);

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  const { superhero, alter_ego, characters, first_appearance, publisher } =
    hero;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          className="img-thumbnail animate__animated animate__flipInX animate__faster"
          src={`/assets/heroes/${id}.jpg`}
          alt={superhero}
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego</b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher</b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance</b>
            {first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>

        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Back
        </button>
      </div>
    </div>
  );
};
