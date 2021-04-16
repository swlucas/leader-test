import styled from 'styled-components/native';
import colors from '../../styles/colors';
import {lighten, transparentize} from 'polished';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  padding: 0 15px;
  height: 46px;
  background: ${transparentize(0.8, colors.background)};
  border-radius: 4px;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: lighten(0.3, colors.background),
  selectionColor: lighten(0.3, colors.background),
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: ${lighten(0.3, colors.background)};
`;

export const Icon = styled(MaterialCommunityIcons).attrs(props => ({
  size: 16,
  color: colors.white,
  name: props.name,
}))``;
