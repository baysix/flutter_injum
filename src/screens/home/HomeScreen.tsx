import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import HomeHeader from './components/HomeHeader';
import HomeMenuList from './components/HomeMenuList';

const HomeScreen: React.FC = () => {
  return (
    // ㅔㅌ스트
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <HomeMenuList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf5eb',
  },
});

export default HomeScreen;
