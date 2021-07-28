import {BiRightArrowAlt} from 'react-icons/bi'

import './index.css'

const StoryItem = props => {
  const {item} = props

  return (
    <li className="story-item">
      <p>{item.title}</p>
      <p>by {item.author}</p>
      <a href={item.news_url}>
        Read More <BiRightArrowAlt />
      </a>
    </li>
  )
}

export default StoryItem
