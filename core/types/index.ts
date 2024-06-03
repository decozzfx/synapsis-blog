export interface IBlogPost {
  id: number
  user_id: number
  title: string
  body: string
}

export interface IComments {
  id: number
  post_id: number
  name: string
  email: string
  body: string
}
