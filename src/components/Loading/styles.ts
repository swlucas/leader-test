import styled from 'styled-components/native';
import colors from '../../styles/colors';
import {darken} from 'polished';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${darken('0.3', colors.background)};
`;

export const Indicator = styled.ActivityIndicator.attrs({
  size: 'large',
  color: colors.white,
})``;
