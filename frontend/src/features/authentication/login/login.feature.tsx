import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import * as yup from 'yup';

export type UserLoginForm = {
  email: string;
  password: string;
};
export const schema = yup
  .object({
    email: yup
      .string()
      .required('Please provide your email address.')
      .email('Please provide a valid email address.'),
    password: yup
      .string()
      .required('Please provide your password.')
      .min(4, 'Password is too short - should be 4 chars minimum.'),
  })
  .required();

const LoginFeature = () => {
  const {
    handleSubmit,
    register,
    formState,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<UserLoginForm>({
    resolver: yupResolver(schema),
    defaultValues: { email: '', password: '' },
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: '', password: '' });
    }
  }, [formState, reset]);

  const onSubmit = async (data: UserLoginForm) => {
    console.log(data);
  };

  return (
    <form className='mt-10 grid gap-4' onSubmit={handleSubmit(onSubmit)}>
      <div className='grid gap-2'>
        <label htmlFor='email'>Email Address</label>
        <input
          type='email'
          id='email'
          placeholder='name@demomail.com'
          className='bg-gray-200 p-4 h-14'
          {...register('email')}
        />
        {errors.email && (
          <p className='text-sm text-red-500'>{errors.email?.message}</p>
        )}
      </div>
      <div className='grid gap-2'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          className='bg-gray-200 p-4 h-14 '
          {...register('password')}
        />
        {errors.password && (
          <p className='text-sm text-red-500'>{errors.password?.message}</p>
        )}
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
  );
};
export default LoginFeature;
