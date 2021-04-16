import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Container, Text, Indicator} from './styles';

interface Dprops {
  loading?: boolean;
}

type Props = TouchableOpacityProps & Dprops;
const Button: React.FC<Props> = ({children, loading, ...rest}) => {
  return (
    <Container {...rest}>
      {loading ? <Indicator /> : <Text>{children}</Text>}
    </Container>
  );
};

export default Button;
