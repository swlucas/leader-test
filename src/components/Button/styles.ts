import styled from 'styled-components/native';
import colors from '../../styles/colors';
export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  height: 46px;
  background: ${colors.background};
  border-radius: 4px;
`;
export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const Indicator = styled.ActivityIndicator.attrs({
  size: 'small',
  color: colors.white,
})``;
