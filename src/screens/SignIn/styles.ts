import {Platform} from 'react-native';
import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoBranca from '../../assets/logo-branca.png';
import colors from '../../styles/colors';

import {darken} from 'polished';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background: ${darken('0.3', colors.background)};
`;

export const Logo = styled.Image.attrs({
  source: logoBranca,
})``;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormEmail = styled(Input).attrs({
  keyboardType: 'email-address',
  autoCorrect: false,
  autoCapitalize: 'none',
  placeholder: 'Digite seu Email',
  icon: 'email',
})`
  /* margin-bottom: 10px; */
  ${props => props.error && `border-color: ${colors.error}`}
  ${props => props.error && 'border-width: 1px'}
`;
export const FormPassword = styled(Input).attrs({
  secureTextEntry: true,
  placeholder: 'Digite sua Senha',
  icon: 'lock',
})`
  ${props => props.error && `border-color: ${colors.error}`}
  ${props => props.error && 'border-width: 1px'}
`;

export const FormErrorContainer = styled.View`
  justify-content: center;
  min-height: 15px;
  margin-bottom: 10px;
`;

export const FormErrorText = styled.Text.attrs({})`
  font-size: 16px;
  color: ${colors.error};

  padding: 0 10px;
`;

export const SubmitButton = styled(Button).attrs({})`
  margin-bottom: 10px;
`;
