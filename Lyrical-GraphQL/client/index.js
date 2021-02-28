import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql'
});

const Root = () => {
  return (
      <ApolloProvider client={client}>
          <div>
              <h2>Lyrical 🚀</h2>
          </div>
      </ApolloProvider>
  );
};

render(<Root />, document.getElementById('root'));
