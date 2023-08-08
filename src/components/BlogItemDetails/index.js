// Write your JS code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogItemDtails: {}, isLoading: true}

  componentDidMount() {
    this.getDeatlsList()
  }

  getDeatlsList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const date = await response.json()
    console.log(date)
    const updateDate = {
      title: date.title,
      imageUrl: date.image_url,
      avatarUrl: date.avatar_url,
      author: date.author,
      content: date.content,
    }
    this.setState({blogItemDtails: updateDate, isLoading: false})
  }

  render() {
    const {blogItemDtails, isLoading} = this.state
    const {title, imageUrl, avatarUrl, content, author} = blogItemDtails
    return (
      <div className="containerBlog">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <div className="containerBlog-1">
            <h1 className="blog-heading">{title}</h1>
            <div className="blog-div-row">
              <img src={avatarUrl} alt={author} className="blog-logo " />
              <p className="content">{author}</p>
            </div>
            <div className="blog-img-div ">
              <img src={imageUrl} alt={title} className="img" />
              <p className="content">{content}</p>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default BlogItemDetails
