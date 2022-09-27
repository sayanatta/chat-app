import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import * as yup from 'yup';
import { InputComponent } from '../../../components';

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
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState,
    formState: { errors },
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
    // console.log(data);
    try {
      const response = await fetch('http://localhost:3001/api/sign-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      // console.log(responseData);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
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
        {'login'}
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
