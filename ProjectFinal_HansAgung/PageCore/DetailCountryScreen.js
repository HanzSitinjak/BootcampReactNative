import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default DetailCountryScreen;