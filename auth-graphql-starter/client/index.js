import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { HashRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import App from './components/App';

/*
 * Biggest gotcha in Apollo
 * difference between GraphiQL & Apollo
 * Apollo GraphQL does not attach any cookies to identify backend to request
 * GraphiQL does attach cookies
 */
const link = createHttpLink({
    uri: '/graphql',
    credentials: 'same-origin'
})

export const client = new ApolloClient({
    cache: new InMemoryCache({
        typePolicies: {
            user: {
                keyFields: ['id']
            }
        }
    }),
    uri: 'http://localhost:4000/graphql',
    link
});

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <HashRouter>
                <Route path='/' component={App} />
                <div>Auth Provider</div>
                {/*<App />*/}
            </HashRouter>
        </ApolloProvider>
    );
};

ReactDOM.render(<Root />, document.getElementById('root'));
