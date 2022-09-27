import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/useredux.hook';

const PrivateRoutes = () => {
  const { user } = useAppSelector(state => state.auth);
  return user?.token ? <Outlet /> : <Navigate to='/login' />;
};
export default PrivateRoutes;
