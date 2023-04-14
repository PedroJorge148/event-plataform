import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/clevpe0g241wp01sz0nagh6pq/master",
  cache: new InMemoryCache(),
});
