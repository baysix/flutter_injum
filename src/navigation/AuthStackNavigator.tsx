import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/login/LoginScreen';
// import SignUpScreen from '../screens/SignUpScreen';

const AuthStack = createStackNavigator();

const AuthStackNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      {/* <AuthStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerShown: false}}
      /> */}
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
