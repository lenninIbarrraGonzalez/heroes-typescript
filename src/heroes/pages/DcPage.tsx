import { HeroList } from '../components';

export const DcPage: React.FC = () => {
  return (
    <>
      <h1>Heroes de DC</h1>
      <hr />
      <HeroList publisher={'DC Comics'} />
    </>
  );
};
