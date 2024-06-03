import { useQuery } from '@tanstack/react-query'
import * as services from '../services'

const useGetBlogComments = (id: string) => {
  const data = useQuery({
    queryKey: ['getListComments', id],
    queryFn: async () => {
      const { data: axiosData } = await services.getBlogComments(id)
      return axiosData
    }
  })
  return data
}

export default useGetBlogComments
