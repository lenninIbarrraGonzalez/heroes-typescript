import { HeroList } from '../components/HeroList';

export const MarvelPage: React.FC = () => {
  return (
    <>
      <h1>MarvelPage</h1>
      <hr />
      <HeroList publisher={'Marvel Comics'} />
    </>
  );
};
