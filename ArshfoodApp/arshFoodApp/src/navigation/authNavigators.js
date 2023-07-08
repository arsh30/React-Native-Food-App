import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SigninWelcomeScreen from '../screens/authScreens/SigninWelcomeScreen';
import SigninScreen from '../screens/authScreens/SigninScreen';

const Auth = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="SignInWelcomeScreen"
        component={SigninWelcomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Auth.Screen
        name="SignInScreen"
        component={SigninScreen}
        options={{
          headerShown: false,
        }}
      />
    </Auth.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
