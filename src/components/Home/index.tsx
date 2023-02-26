import { Rootstate } from '../../store';
import { useSelector } from 'react-redux';
import Compilation from './Compilation';
import Introduction from './Introduction';

const Home = () => {
  const user = useSelector((state: Rootstate) => state.user);

  return <>{user ? <Compilation /> : <Introduction />}</>;
};

export default Home;
