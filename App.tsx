import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {colors} from './src/styles/main';
import MainStackNavigator from './src/components/navigation/stacknavigation';
import {NativeBaseProvider} from 'native-base';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.blueHader}
      />
      <NativeBaseProvider>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};

export default App;
