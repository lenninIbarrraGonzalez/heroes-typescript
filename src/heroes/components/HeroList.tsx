import { getHeroesByPublisher } from '../helpers';
import { Publisher } from '../types/Publisher';
import { Hero } from '../interfaces/Hero';

interface HeroListProps {
  publisher: Publisher;
}

export const HeroList: React.FC<HeroListProps> = ({ publisher }) => {
  const heroes: Hero[] = getHeroesByPublisher(publisher);

  console.log(heroes);

  return (
    <ul>
      {heroes.map((hero) => (
        <li key={hero.id}>{hero?.superhero}</li>
      ))}
    </ul>
  );
};
