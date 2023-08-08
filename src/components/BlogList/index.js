// Write your JS code here
import {Component} from 'react'

import './index.css'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getDetailsBlogList()
  }

  getDetailsBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const date = await response.json()
    console.log(date)
    const updateDate = date.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    console.log(updateDate)
    this.setState({blogList: updateDate, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul className="ul-list-of">
            {blogList.map(eachList => (
              <BlogItem key={eachList.id} blogItem={eachList} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default BlogList
