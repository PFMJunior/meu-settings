import axios from 'axios'
import { useQuery } from '@tanstack/vue-query'

export function useUserProfile() {
  return useQuery({
    queryKey: ['userProfile'],
    queryFn: async () => {
      const { data } = await axios.get('/mock/profile.json').catch(() => ({
        data: { name: 'Usuário Exemplo', email: 'email@exemplo.com' }
      }))
      return data
    },
    staleTime: 1000 * 60
  })
}
