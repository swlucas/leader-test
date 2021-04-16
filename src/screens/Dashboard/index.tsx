import React, {useLayoutEffect} from 'react';

import {useAuth} from '../../contexts/auth';
import {StackNavigationProp} from '@react-navigation/stack';

import {Container, Title, Button, TextButton} from './styles';

type Props = {
  navigation: StackNavigationProp<any, any>;
};

const Dashboard: React.FC<Props> = ({navigation}) => {
  const {signOut} = useAuth();

  function handleSignOut() {
    signOut();
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={handleSignOut}>
          <TextButton>Sair</TextButton>
        </Button>
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <Title>Bem Vindo</Title>
    </Container>
  );
};

export default Dashboard;
