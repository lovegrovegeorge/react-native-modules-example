import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { NavigationContainer } from '@react-navigation/native';

import { Navigator } from './Navigator';
import { client } from './graphql/client';

const App = () => (
  <NavigationContainer>
    <ApolloProvider client={client}>
      <Navigator />
    </ApolloProvider>
  </NavigationContainer>
);

export default App;
