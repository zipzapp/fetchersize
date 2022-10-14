import { UseFormReturn } from 'react-hook-form';

export type GetResponse = {
  occupations: Array<string>;
  states: Array<{ name: string; abbreviation: string }>;
};

export type PostPayload = {
  name: string;
  email: string;
  password: string;
  occupation: string;
  state: string;
};

export type ExampleFormOptions = { states: Option[]; occupations: Option[] };

export interface FormFieldProps {
  name: keyof PostPayload;
  label: string;
  control: UseFormReturn<PostPayload>['control'];
  required?: boolean;
  readOnly?: boolean;

  [otherProp: string]: unknown;
}

export type Option = string;

export interface AutoCompleteFormFieldProps extends FormFieldProps {
  options: Array<Option>;
}
