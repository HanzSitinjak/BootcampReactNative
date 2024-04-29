import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginPage from './LoginPage'; 

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginPage'); 
    }, 2000); 
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GlobalAccuracy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
  },
  title: {
    fontSize: 36,
    color: '#333',
  },
});

export default SplashScreen;
