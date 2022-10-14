import React from 'react';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { FormFieldProps } from '../types';

export default function TextFormField(props: FormFieldProps) {
  const { control, name, label, required = false, readOnly = false, ...rest } = props;
  return (
    <Controller
      name={name}
      rules={{ required }}
      control={control}
      defaultValue={''}
      render={({ field }) => {
        return (
          <TextField
            {...field}
            label={label}
            onChange={field.onChange}
            value={field.value}
            required={required}
            InputProps={{ readOnly }}
            {...rest}
          />
        );
      }}
    />
  );
}
