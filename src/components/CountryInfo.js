import React, {useState} from 'react';
import { useQuery } from '@apollo/client';
import { View, Text, StyleSheet, ActivityIndicator, TextInput, Button } from 'react-native';
import { Query } from '../graphQl/query'; 

const CountryInfo = () => {


    const { loading, error, data } = useQuery(Query, {
        variables: { code: 'IN' }, // Replace with the desired country code
      });

    if (loading) return <ActivityIndicator style={styles.loader} size="large" />;
    if (error) return <Text style={styles.error}>Error: {error.message}</Text>;

  const country = data.country;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{country.name}</Text>
      <Text>Native: {country.native}</Text>
      <Text>Capital: {country.capital}</Text>
      <Text>Emoji: {country.emoji}</Text>
      <Text>Currency: {country.currency}</Text>
      <Text>Languages: {country.languages.map((lang) => lang.name).join(', ')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default CountryInfo;
