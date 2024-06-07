import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';

type NavigationProps = NavigationProp<RootStackParamList, 'Dash'>;

const DashScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>DashScreen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Go to Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default DashScreen;
