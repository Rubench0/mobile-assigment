import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Feed from '../../screens/feed/Feed';
import {colors} from '../../styles/main';
import Details from '../../screens/details/Details';

type RootStackParamList = {
  Feed: any;
  Detalle: any;
};

const Stack = createStackNavigator<RootStackParamList>();

const MainStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Feed"
      component={Feed}
      options={{
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: colors.blueHader,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
    <Stack.Screen
      name="Detalle"
      component={Details}
      options={{
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
          backgroundColor: colors.blueHader,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackTitleVisible: false,
        headerBackTitle: 'Atrás',
      }}
    />
  </Stack.Navigator>
);

export default MainStackNavigator;
