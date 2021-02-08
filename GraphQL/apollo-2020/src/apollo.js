import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const cache = new InMemoryCache();
const link = new createHttpLink({
    uri: "http://localhost:4000/",
});

const client = new ApolloClient({
    cache: cache,
    link: link,

})

export default client;