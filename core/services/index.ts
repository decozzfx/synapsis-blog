import axios from 'axios'
import { IBlogPost, IComments } from '../types'

export const getBlogList = async (params: any) => {
  return await axios.get<IBlogPost[]>('https://gorest.co.in/public/v2/posts')
}
export const getBlogDetail = async (id: string) => {
  return await axios.get<IBlogPost>('https://gorest.co.in/public/v2/posts/' + id)
}
export const getBlogComments = async (id: string) => {
  return await axios.get<IComments[]>(`https://gorest.co.in/public/v2/comments`)
}
