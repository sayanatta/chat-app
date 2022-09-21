import { Route, Routes } from 'react-router-dom';
import { FeedPage, LoginPage, SignUpPage } from './pages';

const App = () => {
  return (
    <Routes>
      <Route>
        <Route index element={<FeedPage />} />
        <Route path='signup' element={<SignUpPage />} />
        <Route path='login' element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default App;
