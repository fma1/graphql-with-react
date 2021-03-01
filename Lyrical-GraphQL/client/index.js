import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { HashRouter, Route } from 'react-router-dom';

import SongList from './components/SongList';

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql'
});

const Root = () => {
  return (
      <ApolloProvider client={client}>
          <HashRouter>
              <Route exact path="/" component={SongList} />
          </HashRouter>
          <div>
              <h2>Lyrical 🚀</h2>
              <SongList />
          </div>
      </ApolloProvider>
  );
};

render(<Root />, document.getElementById('root'));
