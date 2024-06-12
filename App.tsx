import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStackNavigator from './src/navigation/HomeStackNavigator';
import DashboardStackNavigator from './src/navigation/DashboardStackNavigator';
import AuthStackNavigator from './src/navigation/AuthStackNavigator'; // Import the Auth stack

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // const checkLoginStatus = async () => {
    //   try {
    //     const token = await AsyncStorage.getItem('userToken');
    //     setIsAuthenticated(!!token);
    //   } catch (e) {
    //     setIsAuthenticated(false);
    //   }
    // };

    // checkLoginStatus();

    setIsAuthenticated(false);
  }, []);

  if (isAuthenticated === null) {
    return null; // Optionally, return a loading spinner here
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <Tab.Navigator
          initialRouteName="HomeTab"
          screenOptions={{headerShown: false}}>
          <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
          <Tab.Screen name="DashTab" component={DashboardStackNavigator} />
        </Tab.Navigator>
      ) : (
        <AuthStackNavigator /> // Render the auth stack if not authenticated
      )}
    </NavigationContainer>
  );
};

export default App;
