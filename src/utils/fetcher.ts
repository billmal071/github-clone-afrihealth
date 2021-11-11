import { GraphQLClient } from "graphql-request";

export async function fetcher(query: string, variables: any) {
  const client = new GraphQLClient("https://api.github.com/graphql", {
    headers: {
      authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
    }
  });

  return await client.request(query, variables);
}