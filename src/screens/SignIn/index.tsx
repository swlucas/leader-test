import React, {useState} from 'react';

import {useAuth} from '../../contexts/auth';

import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  Container,
  Form,
  FormEmail,
  FormPassword,
  SubmitButton,
  FormErrorContainer,
  FormErrorText,
} from './styles';

import Logo from '../../components/Logo';

const schema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Campo Obrigatório'),
  password: yup.string().required('Campo Obrigatório'),
});

const SignIn: React.FC = () => {
  const {control, handleSubmit, errors, setError, clearErrors} = useForm({
    resolver: yupResolver(schema),
  });
  const {signIn} = useAuth();
  const [loading, setLoading] = useState(false);

  function handleSign(data) {
    clearErrors();
    setLoading(true);
    signIn(data).catch(error => {
      setError('request', {
        type: 'SignIn',
        message: error.data?.non_field_errors[0],
      });
    });
    setLoading(false);
  }

  return (
    <Container>
      <Logo />
      <Form>
        <Controller
          name="email"
          defaultValue=""
          control={control}
          render={({onChange, onBlur, value}) => (
            <FormEmail
              error={errors.email}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
        />
        <FormErrorContainer>
          <FormErrorText>{errors.email && errors.email.message}</FormErrorText>
        </FormErrorContainer>
        <Controller
          name="password"
          defaultValue=""
          control={control}
          render={({onChange, onBlur, value}) => (
            <FormPassword
              error={errors.password}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
        />
        <FormErrorContainer>
          <FormErrorText>
            {errors.password && errors.password.message}
          </FormErrorText>
        </FormErrorContainer>

        <SubmitButton loading={loading} onPress={handleSubmit(handleSign)}>
          Sign In
        </SubmitButton>
        <FormErrorContainer>
          <FormErrorText>
            {errors.request && errors.request.message}
          </FormErrorText>
        </FormErrorContainer>
      </Form>
    </Container>
  );
};

export default SignIn;
