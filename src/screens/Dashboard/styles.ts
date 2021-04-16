import styled from 'styled-components/native';

import logoBranca from '../../assets/logo-branca.png';
import colors from '../../styles/colors';

import {darken} from 'polished';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background: ${darken('0.3', colors.background)};
`;

export const Logo = styled.Image.attrs({
  source: logoBranca,
})``;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${colors.white};
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding-right: 10px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${colors.white};
`;
