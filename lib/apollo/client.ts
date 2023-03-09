import { ApolloClient, InMemoryCache } from '@apollo/client'
import { BASE_API_URL } from '@lib/config'

const client = new ApolloClient({
  uri: `${BASE_API_URL}/graphql`,
  cache: new InMemoryCache()
})

export default client
