// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogItem
  return (
    <Link to={`/blogs/${id}`} className="li">
      <li className="list-cont">
        <img src={imageUrl} alt={`item${id}`} className="lis-imgeUrl" />
        <div className="list-div">
          <p className="list-param">{topic}</p>
          <h1 className="list-headingm">{title}</h1>
          <div className="list-row">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar-img" />
            <p className="list-param">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default BlogItem
