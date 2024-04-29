import 'react-native-gesture-handler'; // Import 'react-native-gesture-handler' terlebih dahulu
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'; 
import SplashScreen from './PageCore/SplashScreen';
import LoginPage from './PageCore/LoginPage';
import HomePage from './PageCore/HomePage';
import DetailCountryScreen from './PageCore/DetailCountryScreen';
import ProfilePage from './PageCore/ProfilePage'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" headerMode="none">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="DetailCountry" component={DetailCountryScreen} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
        {/* Tambahkan halaman-halaman lain di sini */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
