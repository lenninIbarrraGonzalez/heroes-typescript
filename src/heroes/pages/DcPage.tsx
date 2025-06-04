import { HeroList } from '../components/HeroList';

export const DcPage: React.FC = () => {
  return (
    <>
      <h1>Heroes de DC</h1>
      <hr />
      <HeroList publisher={'DC Comics'} />
    </>
  );
};
