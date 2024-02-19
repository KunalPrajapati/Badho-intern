import React from 'react';
import { ApolloProvider } from '@apollo/client/react';
import client from './src/apollo/apollo';
import CountryInfo from './src/components/CountryInfo';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <CountryInfo />
    </ApolloProvider>
  );
};

export default App;

