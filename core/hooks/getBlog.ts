import { useQuery } from '@tanstack/react-query'
import * as services from '../services'

const useGetBlogDetail = (id: string) => {
  const data = useQuery({
    queryKey: ['getBlogDetail', id],
    queryFn: async () => {
      const { data: axiosData } = await services.getBlogDetail(id)
      return axiosData
    }
  })
  return data
}

export default useGetBlogDetail
