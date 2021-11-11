import { GraphQLClient } from "graphql-request";

export async function fetcher(query: string, variables: any) {
  const TOKEN = import.meta.env.DEV
    ? import.meta.env.VITE_GITHUB_TOKEN
    : process.env.VITE_GITHUB_TOKEN;
  const client = new GraphQLClient("https://api.github.com/graphql", {
    headers: {
      authorization: `Bearer ${TOKEN ?? process.env.VITE_GITHUB_TOKEN}`,
    },
  });

  return await client.request(query, variables);
}
