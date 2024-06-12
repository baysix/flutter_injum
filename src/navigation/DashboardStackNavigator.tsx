import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import DashScreen from '../screens/dash/DashScreen';

export type DashboardStackParamList = {
  Home: undefined;
  Dash: undefined;
};

const DashboardStack = createStackNavigator<DashboardStackParamList>();

const DashboardStackNavigator: React.FC = () => {
  return (
    <DashboardStack.Navigator initialRouteName="Dash">
      <DashboardStack.Screen name="Home" component={HomeScreen} />
      <DashboardStack.Screen name="Dash" component={DashScreen} />
    </DashboardStack.Navigator>
  );
};

export default DashboardStackNavigator;
