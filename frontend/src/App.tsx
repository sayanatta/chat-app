import { Route, Routes } from 'react-router-dom';
import { LoginPage, SignUpPage } from './pages';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </>
  );
};

export default App;
