import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import BlogPage from '@/components/BlogPage'
const payload = await getPayloadHMR({ config })
const data = await payload.find({
  collection: 'pages',
})
export default function BlogPageTest() {
  return <BlogPage data={data} />
}
