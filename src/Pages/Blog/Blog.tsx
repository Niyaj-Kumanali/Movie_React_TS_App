import BlogItem from '../../components/BlogItem/BlogItem'
import { blogData } from '../../data/blog'
import './Blog.css'
const Blog = () => {
  return (
    <div id="Blog">
        <h1 className='blog-heading'>BLOG</h1>
        <div className="blog-content">
            {
                blogData.map((blog, index) => <BlogItem blog={blog} key={index}/>)
            }
        </div>
    </div>
  )
}

export default Blog