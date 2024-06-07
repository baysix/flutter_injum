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
} from 'react-native';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = () => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = password.length >= 6;

    setEmailValid(isEmailValid);
    setPasswordValid(isPasswordValid);

    if (!isEmailValid) {
      Alert.alert('이메일 입력해주세요!');
      return;
    }

    if (!isPasswordValid) {
      Alert.alert('패스워드 입력해주세요');
      return;
    }

    // Here, you can add further actions, like making an API call for authentication
    Alert.alert('Login Successful', 'You have successfully logged in.');
  };

  return (
    <ImageBackground
      source={require('../../assets/img/login_bg_cover.jpeg')} // 배경 이미지 경로를 설정합니다.
      style={styles.background}
      resizeMode="cover">
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>예점</Text>
          <Text style={styles.subTitle}>신점 사주 예약 어플 </Text>
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
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // 배경을 약간 투명하게 설정하여 배경 이미지가 보이도록 합니다.
  },
  innerContainer: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff',
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
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
    borderColor: 'red', // 유효하지 않은 입력 필드의 border 색상 설정
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
  bottomImage: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    width: 50,
    height: 50,
  },
});

export default LoginScreen;
