/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Scan, SignUp} from './screens';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import Tabs from './navigation/tabs';
import TopUp from './screens/TopUp';
import Transfer from './screens/Transfer';
import Bill from './screens/Bill';
import Games from './screens/Games';
import Internet from './screens/Internet';
import MobilePrepaid from './screens/MobilePrepaid';
import Wallet from './screens/Wallet';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'SignUp'}>
        <Stack.Screen name="SignUp" component={SignUp} />
        {/* Tabs */}
        <Stack.Screen name="Bill" component={Bill} />
        <Stack.Screen name="Games" component={Games} />
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Internet" component={Internet} />
        <Stack.Screen name="MobilePrepaid" component={MobilePrepaid} />
        <Stack.Screen name="TopUp" component={TopUp} />
        <Stack.Screen name="Transfer" component={Transfer} />
        <Stack.Screen name="Wallet" component={Wallet} />
        {/* <Stack.Screen name="Scan" component={Scan} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
