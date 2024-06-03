import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { defaultMetaTags } from '../core/constants'
import Layout from '../shared/components/layout/layout.component'
import Card from '../shared/components/card/card.component'
import useGetListTable from '../core/hooks/getAllBlogs'
import PaginatorComponent from '../shared/components/paginator/paginator.component'

const calculateRange = length => Array.from({ length }, (v, k) => k + 1)

const cards = entries => entries.map((entry, index) => <Card {...entry} key={index} />)

const IndexPage = () => {
  const rangeLimit = Math.ceil(20 / 5)
  const range = calculateRange(rangeLimit)

  const [page, updatePage] = useState(0)

  const { data, isLoading } = useGetListTable({ pagination: { page } })

  return (
    <Layout metaTags={defaultMetaTags}>
      <div className='container'>
        <div className='blogposts'>
          <h1 className='blogposts__header'>Latest posts</h1>
          {isLoading ? <div>Loading...</div> : <div className='cards-deck'>{cards(data)}</div>}
        </div>
        <div className='pagination'>
          <PaginatorComponent handlePaginationChange={event => updatePage(event)} range={range} skip={page} />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
