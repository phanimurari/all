import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const statusCode = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}
const failureView =
  'https://assets.ccbp.in/frontend/react-js/api-failure-view.png'

class GithubPopularRepos extends Component {
  state = {
    activeTab: languageFiltersData[0].id,
    reposList: [],
    apiStatus: statusCode.initial,
  }

  componentDidMount() {
    this.fetchPopularRepos()
  }

  fetchPopularRepos = async () => {
    this.setState({apiStatus: statusCode.inProgress})
    const {activeTab} = this.state
    console.log(activeTab)

    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeTab}`

    const response = await fetch(apiUrl)

    if (response.ok === true) {
      const data = await response.json()
      const updatedReposList = data.popular_repos.map(repo => ({
        id: repo.id,
        name: repo.name,
        startsCount: repo.stars_count,
        forksCount: repo.forks_count,
        avatarUrl: repo.avatar_url,
        issuesCount: repo.issues_count,
      }))
      this.setState({
        reposList: updatedReposList,
        apiStatus: statusCode.success,
      })
    } else {
      this.setState({apiStatus: statusCode.failure})
    }
  }

  updateActiveTab = tab => {
    this.setState({activeTab: tab}, this.fetchPopularRepos)
  }

  renderPopularRepos = () => {
    const {reposList} = this.state

    return (
      <div className="repos-container">
        {reposList.map(repo => (
          <RepositoryItem repoItem={repo} key={repo.id} />
        ))}
      </div>
    )
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderStatusRepos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case statusCode.inProgress:
        return this.renderLoader()
      case statusCode.success:
        return this.renderPopularRepos()
      case statusCode.failure:
        return this.failureView()
      default:
        return null
    }
  }

  failureView = () => (
    <div className="repos-container">
      <img src={failureView} alt="failure view" className="failure-view" />
    </div>
  )

  render() {
    const {activeTab} = this.state

    return (
      <div className="github-repos-container">
        <h1 className="heading">Popular</h1>
        <ul className="filters-container">
          {languageFiltersData.map(filter => (
            <LanguageFilterItem
              filterData={filter}
              key={filter.id}
              onClickUpdateTab={this.updateActiveTab}
              active={activeTab}
            />
          ))}
        </ul>

        {this.renderStatusRepos()}
      </div>
    )
  }
}

export default GithubPopularRepos
