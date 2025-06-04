import { heroes } from '../data/heroes';
import { Hero } from '../interfaces/Hero';
import { Publisher } from '../types/Publisher';

export const getHeroesByPublisher = (publisher: Publisher): Hero[] => {
  const validatePupblisher = ['DC Comics', 'Marvel Comics'];
  if (!validatePupblisher.includes(publisher)) {
    throw new Error(`${publisher} in not valid publisher`);
  }

  return heroes.filter((heroe) => heroe.publisher === publisher);
};
