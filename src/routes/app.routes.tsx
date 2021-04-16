import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../screens/Dashboard';

import Logo from '../components/Logo';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator screenOptions={{headerTransparent: true}}>
    <AppStack.Screen
      options={{
        headerTitle: () => <Logo />,
      }}
      name="Dashboard"
      component={Dashboard}
    />
  </AppStack.Navigator>
);

export default AppRoutes;
