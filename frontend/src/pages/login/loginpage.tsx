import { Link } from 'react-router-dom';
import { PageContainer } from '../../layouts';

const LoginPage = () => {
  return (
    <PageContainer>
      <section className='grid grid-cols-12 gap-6 lg:gap-0 flex-1'>
        <div className='bg-blue-500 col-span-12 h-40 lg:h-auto lg:col-span-6 grid place-content-center'>
          <h2 className='text-white text-4xl'>Chat App</h2>
        </div>
        <div className='col-span-12 lg:col-span-6 grid items-center content-center p-10'>
          <div className='max-w-lg mx-auto w-full'>
            <h2 className='text-2xl text-gray-800'>Hello there!</h2>
            <form className='mt-10 grid gap-4'>
              <div className='grid gap-2'>
                <label htmlFor='email'>Email Address</label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='name@demomail.com'
                  className='bg-gray-200 p-4 h-14 '
                />
              </div>
              <div className='grid gap-2'>
                <label htmlFor='password'>Password</label>
                <input
                  type='text'
                  name='password'
                  id='password'
                  className='bg-gray-200 p-4 h-14 '
                />
              </div>
              <Link to='#' className='text-right text-blue-600 -mt-2'>
                Reset Password
              </Link>
              <button
                type='submit'
                className='bg-blue-500 text-white uppercase px-8 py-4 tracking-wide'>
                login
              </button>
              <p>
                Don’t have an account?{' '}
                <Link className='text-blue-600' to='/signup'>
                  Sign up.
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};
export default LoginPage;
