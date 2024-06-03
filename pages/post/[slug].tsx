import React from 'react'
import ReactMarkdown from 'react-markdown'
import Layout from '../../shared/components/layout/layout.component'
import useGetBlogDetail from '../../core/hooks/getBlog'
import { useParams } from 'next/navigation'
import useGetBlogComments from '../../core/hooks/getBlogComments'

const PostPage = () => {
  const params = useParams<{ slug: string }>()
  const { data, isLoading } = useGetBlogDetail(params?.slug)
  const { data: dataComments, isLoading: isLoadingComments } = useGetBlogComments(params?.slug)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      <div className='post-container' id='post-container'>
        <div className='post-header'>
          <h1>{data.title}</h1>
          <div className='author'>
            <p>Written by user id : {data.user_id}</p>
          </div>
        </div>
        <ReactMarkdown className='markdown' children={data.body} />
        <p>Comments</p>
        <div className='comment-container'>
          {dataComments?.map(comment => (
            <div className='comment-item'>
              <p>{comment.name}</p>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default PostPage
