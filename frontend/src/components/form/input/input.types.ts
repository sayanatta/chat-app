import { FieldError } from 'react-hook-form';
export type InputComponentProps = {
  error: FieldError | undefined;
  name: string;
  id: string;
  type: string;
  register: any;
  label: string;
  placeholder: string;
};
