import { useMutation, useQuery } from '@tanstack/react-query'
import * as services from '../services'

type IProps = {
  pagination: {}
}

const useGetListTable = (payload: IProps) => {
  const data = useQuery({
    queryKey: ['getListTable', payload],
    queryFn: async () => {
      const { pagination } = payload
      const filter = {
        orderBy: 'createdAt',
        sortBy: 'desc'
        //   limit: pagination.pageSize,
        //   pageIndex: pagination.pageIndex
      }

      const { data: axiosData } = await services.getBlogList(filter)
      return axiosData
    }
  })
  return data
}

export default useGetListTable
