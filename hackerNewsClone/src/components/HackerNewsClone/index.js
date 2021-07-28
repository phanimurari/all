import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import TabItem from '../TabItem'
import StoryItem from '../StoryItem'
import PaginationFooter from '../PaginationFooter'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const tabsList = [
  {id: 'top-stories', displayValue: 'Top Stories'},
  {id: 'latest-stories', displayValue: 'Latest Stories'},
]

const API_URL = 'https://apis.ccbp.in/hacker-news/'

class HackerNewsClone extends Component {
  state = {
    activeTab: tabsList[0].id,
    activePage: 0,
    isLoading: true,
    newsList: [],
    totalPageCount: 0,
  }

  componentDidMount() {
    this.getNewsList(tabsList[0].id, 0)
  }

  renderTabsList = () => {
    const tabs = tabsList.map(tab => (
      <TabItem
        tab={tab}
        key={tab.id}
        onChangeActiveTab={this.onChangeActiveTab}
      />
    ))
    return tabs
  }

  onChangeActiveTab = tab => {
    this.setState({activeTab: tab, activePage: 0})

    this.getNewsList(tab, 0)
  }

  getNewsList = async (activeTab, offset) => {
    const apiUrl = `${API_URL}${activeTab}?limit=10&offset=${offset}`

    console.log(apiUrl)

    const response = await fetch(apiUrl)

    const data = await response.json()

    this.numberOfNewsListItemsInActiveTab = data.total_news_count

    const totalPageCount = this.numberOfNewsListItemsInActiveTab / 10

    this.setState(
      {newsList: data.news_list, totalPageCount},
      this.setLoadingStatus,
    )
  }

  setLoadingStatus = () => {
    this.setState({isLoading: false})
  }

  renderStoryItem = () => {
    const {newsList} = this.state

    const newsStoryItemsList = newsList.map(item => (
      <StoryItem key={item.id} item={item} />
    ))

    return newsStoryItemsList
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  onIncrementPage = () => {
    const {activePage, totalPageCount} = this.state

    if (activePage < totalPageCount) {
      this.setState(
        {activePage: activePage + 1, isLoading: true},
        this.findOffsetAndCallNewsList,
      )
    }
  }

  onDecrementPage = () => {
    const {activePage} = this.state

    if (activePage > 0) {
      this.setState(
        {activePage: activePage - 1, isLoading: true},
        this.findOffsetAndCallNewsList,
      )
    }
  }

  findOffsetAndCallNewsList = () => {
    const {activePage, activeTab} = this.state

    const offset = activePage * 10

    this.getNewsList(activeTab, offset)
  }

  renderPaginationFooter = () => {
    const {activePage, totalPageCount} = this.state

    return (
      <PaginationFooter
        activePage={activePage + 1}
        onIncrementPage={this.onIncrementPage}
        onDecrementPage={this.onDecrementPage}
        totalPagesCount={totalPageCount}
      />
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="hacker-news-clone-container">
        <h1 className="hacker-news-clone-heading">Hacker News clone</h1>
        <div>
          <ul className="tabs-list">{this.renderTabsList()}</ul>
          <div className="news-list-container">
            {isLoading === true ? (
              this.renderLoader()
            ) : (
              <ul>{this.renderStoryItem()}</ul>
            )}
          </div>
          {this.renderPaginationFooter()}
        </div>
      </div>
    )
  }
}

export default HackerNewsClone
