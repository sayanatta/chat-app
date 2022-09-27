import { Navigate } from 'react-router-dom';
import { LoginFeature } from '../../features/authentication';
import { useAppSelector } from '../../hooks/useredux.hook';
import { PageContainer } from '../../layouts';

const LoginPage = () => {
  const { user } = useAppSelector(state => state.auth);
  if (user?.token) {
    return <Navigate to='/' />;
  }
  return (
    <PageContainer>
      <section className='grid grid-cols-12 gap-6 lg:gap-0 flex-1'>
        <div className='bg-blue-500 col-span-12 h-40 lg:h-auto lg:col-span-6 grid place-content-center'>
          <h2 className='text-white text-4xl'>Chat App</h2>
        </div>
        <div className='col-span-12 lg:col-span-6 grid items-center content-center p-10'>
          <div className='max-w-lg mx-auto w-full'>
            <h2 className='text-2xl text-gray-800'>Hello there!</h2>
            <LoginFeature />
          </div>
        </div>
      </section>
    </PageContainer>
  );
};
export default LoginPage;
