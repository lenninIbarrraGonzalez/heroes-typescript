import { Hero } from '../interfaces/Hero';
import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from '../helpers';
import { Publisher } from '../types/Publisher';

interface HeroListProps {
  publisher: Publisher;
}

export const HeroList: React.FC<HeroListProps> = ({ publisher }) => {
  const heroes: Hero[] = getHeroesByPublisher(publisher);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
