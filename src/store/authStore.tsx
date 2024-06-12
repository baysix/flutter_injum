import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  checkLoginStatus: () => Promise<void>;
}

export const useAuthStore = create<AuthState>(set => ({
  isAuthenticated: false,
  setIsAuthenticated: async (isAuthenticated: boolean) => {
    if (isAuthenticated) {
      await AsyncStorage.setItem('userToken', 'your-token');
    } else {
      await AsyncStorage.removeItem('userToken');
    }
    set({isAuthenticated});
  },
  checkLoginStatus: async () => {
    const token = await AsyncStorage.getItem('userToken');
    set({isAuthenticated: !!token});
  },
}));
