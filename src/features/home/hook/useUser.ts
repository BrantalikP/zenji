import { useGetUser } from '~/features/api/wanikani/components'
import { User } from '~/features/api/wanikani/schemas'

export const useUser = () => {
  const { data: user } = useGetUser(
    {},
    {
      select: (data: User) => data.data,
    },
  )

  return { user }
}
