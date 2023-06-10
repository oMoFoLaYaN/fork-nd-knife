import { createClient } from '@sanity/client';

const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: '2023-05-03',
  useCdn: true,
  token: import.meta.env.VITE_SANITY_AUTH_TOKEN,
});

export default client;
