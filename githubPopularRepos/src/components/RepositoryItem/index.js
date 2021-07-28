import './index.css'

const RepositoryItem = props => {
  const {repoItem} = props
  const {name, avatarUrl, startsCount, forksCount, issuesCount} = repoItem

  return (
    <div className="repo-item">
      <img src={avatarUrl} alt={name} className="repo-avatar" />
      <h1 className="repo-name">{name}</h1>
      <div className="info-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="info-icon"
        />
        <p className="info-text">{startsCount} stars</p>
      </div>
      <div className="info-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="info-icon"
        />
        <p className="info-text">{forksCount} forks</p>
      </div>
      <div className="info-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open-issues"
          className="info-icon"
        />
        <p className="info-text">{issuesCount} open issues</p>
      </div>
    </div>
  )
}

export default RepositoryItem
