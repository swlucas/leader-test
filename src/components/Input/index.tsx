import React, {forwardRef} from 'react';
import {TextInputProps, ViewProps} from 'react-native';

import {Container, TInput, Icon} from './styles';

type DProps = {
  style?: ViewProps;
  icon?: string;
};

type Props = TextInputProps & DProps;
const Input = ({style, icon, ...rest}: Props, ref: any) => {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} />}
      <TInput ref={ref} {...rest} />
    </Container>
  );
};

export default forwardRef(Input);
