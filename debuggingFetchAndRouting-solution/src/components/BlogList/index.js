import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {isLoading: true, blogsData: []}

  componentDidMount() {
    this.getBlogsData()
  }

  // FIX11: await should always be used with async
  getBlogsData = async () => {
    // FIX12: spelling of fetch
    const response = await fetch('https://apis.ccbp.in/blogs')
    // FIX13: to get the response in json format we need to call response.json() method
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    // FIX14: response received for blogsData should be updated in the state
    this.setState({blogsData: formattedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    // FIX15: fetching of data and updating the state should not be done as it leads to infinite loops

    return (
      <div className="blog-list-container">
        {/* FIX16: The testid attribute value should be loader */}
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          blogsData.map(item => <BlogItem blogData={item} key={item.id} />)
        )}
        {/* FIX17: when rendering a list of items we need to use key attribute */}
      </div>
    )
  }
}

export default BlogList
