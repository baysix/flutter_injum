import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import DashScreen from '../screens/dash/DashScreen';

export type HomeStackParamList = {
  Home: undefined;
  Login: undefined;
  Dash: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen name="Dash" component={DashScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
