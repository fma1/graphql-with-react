import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { HashRouter } from 'react-router-dom';

import App from './components/App';

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql'
});

const Root = () => {
  return (
      <ApolloProvider client={client}>
          <HashRouter>
              <App />
          </HashRouter>
      </ApolloProvider>
  );
};

render(<Root />, document.getElementById('root'));
