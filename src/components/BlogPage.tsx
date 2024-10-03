import { PaginatedDocs } from 'payload'
import { Page } from 'payload-types'
import React from 'react'


interface BlogPageProps {
  data: PaginatedDocs<Page>
}

const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
  return <div>{/* Render your data here */}</div>
}

export default BlogPage
