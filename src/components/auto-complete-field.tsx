import React, { useCallback } from 'react';
import { Controller } from 'react-hook-form';
import { Autocomplete, TextField } from '@mui/material';
import { AutoCompleteFormFieldProps, Option } from '../types';

export default function AutoCompleteFormField(props: AutoCompleteFormFieldProps) {
  const { control, name, label, options, required = false, readOnly = false } = props;

  const renderInput = useCallback((params: any) => {
    return <TextField {...params} label={label} required={required} fullWidth />;
  }, [label, required]);

  return (
    <Controller
      name={name}
      rules={{ required }}
      control={control}
      defaultValue={''}
      render={({ field }) => {
        return (
          <Autocomplete
            {...field}
            onChange={(_e, option: Option | null) => field.onChange(option)}
            value={field.value}
            renderInput={renderInput}
            options={options}
            readOnly={readOnly}
          />
        );
      }}
    />
  );
}
