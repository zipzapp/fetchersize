import React, { useState } from 'react';
import { Button, CircularProgress, Container, Paper, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { StyledForm } from './components/styled-form';
import TextFormField from './components/text-field';
import { PostPayload } from './types';
import AutoCompleteFormField from './components/auto-complete-field';
import useExampleAPI from './components/use-example-api';

function App() {
  const [completed, setCompleted] = useState(false);
  const { sampleData, postFormData } = useExampleAPI();

  const formMethods = useForm<PostPayload>();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = formMethods;

  const onSubmit = (formData: any) => {
    postFormData(formData).then((response: number | void) => {
      if (response === 201) setCompleted(true);
    });
  };

  return (
    <Container className="App" sx={{textAlign: 'center'}}>
      <Paper
        elevation={sampleData ? 12 : 0}
        sx={{ maxWidth: '480px', margin: '15% auto', padding: '20px' }}>
        {!sampleData && <CircularProgress size={60} />}
        {sampleData && (
          <FormProvider {...formMethods}>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
              <TextFormField
                control={control}
                label={'Name'}
                name={'name'}
                readOnly={completed}
                required
              />
              <TextFormField
                control={control}
                label={'Email'}
                name={'email'}
                readOnly={completed}
                required
                type={'email'}
              />
              <TextFormField
                control={control}
                label={'Password'}
                name={'password'}
                readOnly={completed}
                required
                type={'password'}
              />
              <AutoCompleteFormField
                control={control}
                label={'Occupation'}
                name={'occupation'}
                options={sampleData.occupations}
                readOnly={completed}
                required
              />
              <AutoCompleteFormField
                control={control}
                label={'State'}
                name={'state'}
                options={sampleData.states}
                readOnly={completed}
                required
              />
              <div>
                {completed ? (
                  <Typography>...submitted!</Typography>
                ) : (
                  <Button fullWidth variant={'contained'} type={'submit'} disabled={isSubmitting}>
                    Submit!
                  </Button>
                )}
              </div>
            </StyledForm>
          </FormProvider>
        )}
      </Paper>
    </Container>
  );
}

export default App;
