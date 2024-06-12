import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useAuthStore} from '../../store/authStore';
import {RootStackParamList} from '../../navigation/types';

// Define the types for the navigation prop
type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('password123');
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const {setIsAuthenticated} = useAuthStore();
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = async () => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = password.length >= 6;

    setEmailValid(isEmailValid);
    setPasswordValid(isPasswordValid);

    if (!isEmailValid) {
      Alert.alert('Invalid Email', 'Please enter a valid email address!');
      return;
    }

    if (!isPasswordValid) {
      Alert.alert(
        'Invalid Password',
        'Password must be at least 6 characters long!',
      );
      return;
    }

    setLoading(true);

    // Simulating an async login request
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a network request

    setIsAuthenticated(true);
    setLoading(false);

    Alert.alert('Login Successful', 'You have successfully logged in.', [
      // {text: 'OK', onPress: () => navigation.replace('HomeTab')},
    ]);
  };

  return (
    <ImageBackground
      source={require('../../assets/img/login_bg_cover.jpeg')}
      style={styles.background}
      resizeMode="cover">
      <SafeAreaView style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View style={styles.innerContainer}>
            <TextInput
              style={[styles.input, !emailValid && styles.errorInput]}
              placeholder="Email"
              placeholderTextColor="#ffcc66"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={text => {
                setEmail(text);
                if (!emailValid) {
                  setEmailValid(validateEmail(text));
                }
              }}
            />
            <TextInput
              style={[styles.input, !passwordValid && styles.errorInput]}
              placeholder="Password"
              placeholderTextColor="#ffcc66"
              secureTextEntry
              value={password}
              onChangeText={text => {
                setPassword(text);
                if (!passwordValid) {
                  setPasswordValid(text.length >= 6);
                }
              }}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  innerContainer: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    color: '#fff',
    height: 40,
    borderColor: '#FFCC66',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  errorInput: {
    borderColor: 'red',
  },
  button: {
    backgroundColor: 'rgba(255, 204, 102, 0.6)',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default LoginScreen;
