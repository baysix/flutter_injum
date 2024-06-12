import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useAuthStore} from './src/store/authStore';
import HomeStackNavigator from './src/navigation/HomeStackNavigator';
import DashboardStackNavigator from './src/navigation/DashboardStackNavigator';
import AuthStackNavigator from './src/navigation/AuthStackNavigator';
import LoadingIndicator from './src/components/indicator/LoadingIndicator';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  const {isAuthenticated, checkLoginStatus} = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      await checkLoginStatus();
      setLoading(false);
    };

    initializeAuth();
  }, [checkLoginStatus]);

  if (loading) {
    return <LoadingIndicator />;
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
