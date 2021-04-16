import React from 'react';
import {ActivityIndicator, TouchableOpacityProps} from 'react-native';

import {Container, Text} from './styles';

interface Dprops {
  loading?: boolean;
}

type Props = TouchableOpacityProps & Dprops;
const Button: React.FC<Props> = ({children, loading, ...rest}) => {
  return (
    <Container {...rest}>
      {loading ? <ActivityIndicator /> : <Text>{children}</Text>}
    </Container>
  );
};

export default Button;
