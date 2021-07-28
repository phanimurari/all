import {Link} from 'react-router-dom'

import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import Header from '../Header'

const apiKey = 'd521585822a0db307382160dbcd2abf7'

class HomeSearch extends Component {
  constructor(props) {
    super(props)

    const userInput = localStorage.getItem('user_input')

    this.state = {
      userInput,
      pageNumber: 1,
      isLoading: true,
      showNotFound: false,
      moviesList: [],
    }
  }

  componentDidMount() {
    const {userInput, pageNumber} = this.state

    this.fetchMovieDetails(userInput, pageNumber)
  }

  fetchMovieDetails = async (userInput, pageNumber) => {
    const searchedMoviesUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${userInput}&page=${pageNumber}`

    const searchedMoviesResponse = await fetch(searchedMoviesUrl)
    const searchedMoviesJsonResponse = await searchedMoviesResponse.json()

    const updatedSearchedMoviesResponse = searchedMoviesJsonResponse.results.map(
      eachMovie => ({
        id: eachMovie.id,
        posterPath: eachMovie.poster_path,
        title: eachMovie.title,
      }),
    )

    const filteredSearchedMoviesResponse = updatedSearchedMoviesResponse.filter(
      eachMovie => eachMovie.posterPath !== null,
    )

    if (filteredSearchedMoviesResponse.length === 0) {
      this.setState({isLoading: false, showNotFound: true})
    } else {
      this.setState({
        isLoading: false,
        showNotFound: false,
        moviesList: filteredSearchedMoviesResponse,
      })
    }
  }

  getInputValue = value => {
    const {userInput} = this.state

    console.log(userInput)
    console.log(value)

    if (userInput !== value) {
      this.setState({
        userInput: value,
        pageNumber: 1,
        isLoading: true,
        moviesList: [],
      })

      this.fetchMovieDetails(value, 1)
    }
  }

  onClickRightIcon = () => {
    const {userInput, pageNumber} = this.state

    let integerNumber = pageNumber

    if (integerNumber < 20) {
      integerNumber += 1

      this.setState({
        isLoading: true,
        moviesList: [],
        pageNumber: integerNumber,
      })

      this.fetchMovieDetails(userInput, integerNumber)
    }
  }

  onClickLeftIcon = () => {
    const {userInput, pageNumber} = this.state

    let integerNumber = pageNumber

    if (integerNumber > 1) {
      integerNumber -= 1

      this.setState({
        isLoading: true,
        moviesList: [],
        pageNumber: integerNumber,
      })

      this.fetchMovieDetails(userInput, integerNumber)
    }
  }

  renderPageNumber = () => {
    const {pageNumber} = this.state

    return (
      <div className="page-numbers-container">
        <button
          onClick={this.onClickLeftIcon}
          type="button"
          className="left-button"
        >
          <img
            alt="left-arrow"
            src="https://res.cloudinary.com/breakingbad/image/upload/v1626348232/Icon_xddcty.png"
          />
        </button>
        <p className="page-numbers-paragraph">{pageNumber} of 20</p>
        <button
          onClick={this.onClickRightIcon}
          type="button"
          className="right-button"
        >
          <img
            alt="right-arrow"
            src="https://res.cloudinary.com/breakingbad/image/upload/v1626348311/Icon_jus1xh.png"
          />
        </button>
      </div>
    )
  }

  renderMovieIcon = props => {
    const {title, posterPath, id} = props

    const imageUrl = `https://image.tmdb.org/t/p/original/${posterPath}`

    return (
      <Link key={id} to={`/movies/${id}`} className="link-item">
        <div className="movie-icon-item">
          <img alt={title} className="movie-image" src={imageUrl} />
        </div>
      </Link>
    )
  }

  renderNotFoundPage = () => {
    const {userInput} = this.state

    return (
      <div className="not-found-search-container">
        <img
          alt="not-found"
          className="not-found-search-image"
          src="https://res.cloudinary.com/breakingbad/image/upload/v1626711668/Group_7394_g1dsgg.png"
        />
        <p className="not-found-search-paragraph">
          Your search for {userInput} did not find any matches.
        </p>
      </div>
    )
  }

  renderHomeSearchComponent = () => {
    const {showNotFound, moviesList} = this.state

    return (
      <>
        {showNotFound && this.renderNotFoundPage()}
        {!showNotFound && (
          <>
            <div className="search-movies-container">
              {moviesList.map(eachMovie => this.renderMovieIcon(eachMovie))}
            </div>
            {this.renderPageNumber()}
          </>
        )}
      </>
    )
  }

  renderLoadingComponent = () => (
    <div className="loader-container">
      <Loader type="TailSpin" color="#D81F26" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="home-search-container">
        <Header
          searchIconContainer={`${true}`}
          searchIcon={false}
          getInputAccess={this.getInputValue}
        />
        {isLoading
          ? this.renderLoadingComponent()
          : this.renderHomeSearchComponent()}
      </div>
    )
  }
}

export default HomeSearch
