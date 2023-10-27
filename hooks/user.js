import { useQuery } from 'react-query';
import { fetchJson } from '../lib/api';

export function useUser() {
  const query = useQuery('user', async () => {
    try {
      return await fetchJson('/api/user');
    } catch (err) {
      return undefined;
    }
  }, {
    cacheTime: Infinity,
    staleTime: 30_000, // ms
  });
  return query.data;
}
