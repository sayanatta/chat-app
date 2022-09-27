import * as Yup from 'yup';

// validation schema for the login form
export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Please provide your email address.')
    .email('Please provide a valid email address.'),
  password: Yup.string()
    .required('Please provide your password.')
    .min(4, 'Password is too short - should be 4 chars minimum.'),
});
