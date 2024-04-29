import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ProfilePage from './ProfilePage'; // Mengimpor halaman profil yang sudah dibuat sebelumnya
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://skyscanner80.p.rapidapi.com/api/v1/get-config', {
        headers: {
          'X-RapidAPI-Key': '653e415612msh4b8ae4e902b7e95p14734djsn07d5a757c69a',
          'X-RapidAPI-Host': 'skyscanner80.p.rapidapi.com'
        }
      });
      setCountries(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCountryPress = (country) => {
    navigation.navigate('DetailCountryScreen', { country });
  };

  const renderCountryItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCountryPress(item)}>
      <View style={styles.countryItem}>
        <Text style={styles.countryName}>{item.country}</Text>
        <Text style={styles.countryMarket}>{item.market}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of Countries</Text>
      <FlatList
        data={countries}
        renderItem={renderCountryItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const DetailCountryScreen = ({ route }) => {
  const { country } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{country.country}</Text>
      <Text style={styles.text}>Market: {country.market}</Text>
      <Text style={styles.text}>Currency: {country.currency}</Text>
      <Text style={styles.text}>Currency Symbol: {country.currencySymbol}</Text>
      <Text style={styles.text}>Currency Title: {country.currencyTitle}</Text>
      <Text style={styles.text}>Locale: {country.locale}</Text>
      <Text style={styles.text}>Site: {country.site}</Text>
    </View>
  );
};

const HomePage = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeStack} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfilePage} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DetailCountryScreen" component={DetailCountryScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  countryItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  countryName: {
    fontSize: 18,
    marginBottom: 5,
  },
  countryMarket: {
    fontSize: 14,
    color: '#666',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default HomePage;
