import { useAppSelector } from '../../hooks/useredux.hook';

const FeedPage = () => {
  const { user } = useAppSelector(state => state.auth);
  return (
    <div>
      <div className='container'>
        <h2>Hello, {user?.data.name} welcome to chat app</h2>
      </div>
    </div>
  );
};
export default FeedPage;
