// src/screens/dash/dash.tsx

import * as React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';

const DashScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>안녕하세요</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default DashScreen;
