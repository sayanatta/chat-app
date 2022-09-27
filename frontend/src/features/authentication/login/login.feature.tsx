import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { InputComponent } from '../../../components';
import { UserLoginPayload } from '../types';
import { loginValidationSchema } from '../validation';
import { useAppDispatch, useAppSelector } from '../../../hooks/useredux.hook';
import { login } from '../store/authentication.slice';

const LoginFeature = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState,
    formState: { errors },
    reset,
  } = useForm<UserLoginPayload>({
    resolver: yupResolver(loginValidationSchema),
    defaultValues: { email: '', password: '' },
  });

  const dispatch = useAppDispatch();
  const { isError, isLoading, isSuccess, message, user } = useAppSelector(
    state => state.auth
  );

  useEffect(() => {
    if (isSuccess || user) {
      reset({ email: '', password: '' });
      navigate('/');
    }
  }, [user, isSuccess, navigate, reset]);

  const onSubmit = async (data: UserLoginPayload) => {
    dispatch(login(data));
  };

  return (
    <form
      className='mt-10 grid gap-4 justify-items-start'
      onSubmit={handleSubmit(onSubmit)}>
      <InputComponent
        name='email'
        id='email'
        type='email'
        placeholder='name@demomail.com'
        label='Email Address'
        error={errors.email}
        register={register}
      />
      <InputComponent
        name='password'
        id='password'
        type='password'
        placeholder='**********'
        label='Password'
        error={errors.password}
        register={register}
      />
      <Link to='#' className='text-right text-blue-600 -mt-2 justify-self-end'>
        Reset Password
      </Link>
      <button
        type='submit'
        className='bg-blue-500 text-white uppercase px-8 py-4 tracking-wide w-full'>
        login
      </button>
      <p>
        Don’t have an account?{' '}
        <Link className='text-blue-600' to='/signup'>
          Sign up.
        </Link>
      </p>
    </form>
  );
};
export default LoginFeature;
