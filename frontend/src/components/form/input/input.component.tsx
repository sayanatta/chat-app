import React from 'react';
import { InputComponentProps } from './input.types';

const InputComponent: React.FC<InputComponentProps> = ({
  error,
  name,
  id,
  type,
  register,
  label,
  placeholder,
}) => {
  const inputClasses = `bg-gray-200 p-4 h-14 outline-none focus:ring focus:ring-blue-400 ${
    !!error && 'focus:ring-red-400 ring ring-red-400'
  }`;
  return (
    <div className='grid gap-2 w-full'>
      <label htmlFor='email'>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={inputClasses}
        {...register(name)}
        autoComplete='off'
      />
      {!!error && <p className='text-sm text-red-500'>{error.message}</p>}
    </div>
  );
};
export default InputComponent;
