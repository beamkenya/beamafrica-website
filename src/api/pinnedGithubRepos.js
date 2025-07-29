const API_URL = 'https://api.github.com/graphql';
const TOKEN = import.meta.env.PUBLIC_GITHUB_TOKEN;


export async function getPinnedRepos(organization = 'beamkenya') {
  const query = `
    {
      organization(login: "${organization}") {
        pinnedItems(first: 100, types: [REPOSITORY]) {
          nodes {
            ... on Repository {
              name
              url
              description
            }
          }
        }
      }
    }
  `;

  const headers = {
    'Authorization': `Bearer ${TOKEN}`,
    'Content-Type': 'application/json',
  };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${await response.text()}`);
    }

    const data = await response.json();

    if (data.errors) {
      throw new Error(data.errors[0].message);
    }

    if (data.data?.organization?.pinnedItems?.nodes) {
      return data.data.organization.pinnedItems.nodes;
    }

    throw new Error('Unexpected response format');
  } catch (error) {
    console.error('Error fetching pinned repos:', error);
    throw error;
  }
}
