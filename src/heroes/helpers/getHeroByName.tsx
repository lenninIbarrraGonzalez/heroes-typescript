import { heroes } from '../data/heroes';
import { Hero } from '../interfaces/Hero';

export const getHeroByName = (name: string): Hero[] => {
  name = name.toLocaleLowerCase().trim();

  if (name.length === 0) return [];

  return heroes.filter((hero: Hero) =>
    hero.superhero.toLocaleLowerCase().includes(name),
  );
};
