import { QueryClient } from '@tanstack/react-query'

export const generateQueryClient = (): QueryClient => {
  return new QueryClient()
}

export const queryClient = generateQueryClient()
