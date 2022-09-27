import { Route, Routes } from 'react-router-dom';
import { FeedPage, LoginPage, SignUpPage } from '../pages';
import PrivateRoutes from './private.routes';

const RootRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route index element={<FeedPage />} />
      </Route>
      <Route path='signup' element={<SignUpPage />} />
      <Route path='login' element={<LoginPage />} />
    </Routes>
  );
};
export default RootRoutes;
