import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './account/SignInScreen';
import SignUpScreen from './account/SignUpScreen';
import SignUpCompleteScreen from './account/SignUpCompleteScreen';

const RootScreen = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Splash'}>
        {RouterSetting.map((v, index) => {
          const ranNum = Math.random().toString(36).substr(2, 10);
          return (
            <Stack.Screen
              key={`${v.name}_${index}_${ranNum}`}
              name={v.name}
              component={v.component}
              options={{
                headerShown: false,
                gestureDirection: 'horizontal',
              }}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const RouterSetting = [
  {
    name: 'Splash',
    component: SplashScreen,
  },
  {
    name: 'SignIn',
    component: SignInScreen,
  },
  {
    name: 'SignUp',
    component: SignUpScreen,
  },
  {
    name: 'SignUpComplete',
    component: SignUpCompleteScreen,
  },
];

export default RootScreen;