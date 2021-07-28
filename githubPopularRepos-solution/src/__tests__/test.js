import {setupServer} from 'msw/node'
import {rest} from 'msw'
import * as fs from 'fs'
import path from 'path'

import {
  render,
  screen,
  waitForElementToBeRemoved,
  waitFor,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import GithubPopularRepositoriesApp from '../App'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const repositoriesData = [
  {
    name: 'EbookFoundation test',
    id: 13491895,
    issues_count: 26,
    forks_count: 41498,
    stars_count: 182166,
    avatar_url: 'https://avatars.githubusercontent.com/u/14127308?v=4',
  },
  {
    name: 'vuejs test',
    id: 11730342,
    issues_count: 542,
    forks_count: 28636,
    stars_count: 181555,
    avatar_url: 'https://avatars.githubusercontent.com/u/6128107?v=4',
  },
  {
    name: 'facebook test',
    id: 10270250,
    issues_count: 686,
    forks_count: 33466,
    stars_count: 166536,
    avatar_url: 'https://avatars.githubusercontent.com/u/69631?v=4',
  },
]

const apiUrl = 'https://apis.ccbp.in/popular-repos'

const server = setupServer(
  rest.get(apiUrl, (req, res, ctx) =>
    res(ctx.json({popular_repos: repositoriesData})),
  ),
)

const jsxCode = fs.readFileSync(
  path.resolve(__dirname, '../components/GithubPopularRepos/index.js'),
  'utf8',
)

const originalConsoleError = console.error

describe('Github popular repos App Component Test Cases', () => {
  beforeAll(() => server.listen())
  afterEach(() => {
    server.resetHandlers()
    console.error = originalConsoleError
  })
  afterAll(() => server.close())

  it('Page should use the given apiUrl for getting the repositories data by using fetch network call:::5:::', async () => {
    const originalFetch = window.fetch
    const mockFetchFunction = jest.fn().mockImplementation(() => ({
      ok: true,
      json: () => Promise.resolve({popular_repos: repositoriesData}),
    }))
    window.fetch = mockFetchFunction

    render(<GithubPopularRepositoriesApp />)

    await waitFor(() => {
      expect(screen.getByText(/EbookFoundation test/i)).toBeInTheDocument()
    })
    expect(window.fetch).toBeCalledWith(expect.stringContaining(`${apiUrl}`))
    window.fetch = originalFetch
  })

  it('When the Page is loaded initially the given apiUrl should be called with `ALL` as the query parameter value for the language:::5:::', async () => {
    const originalFetch = window.fetch
    const mockFetchFunction = jest.fn().mockImplementation(() => ({
      ok: true,
      json: () => Promise.resolve({popular_repos: repositoriesData}),
    }))
    window.fetch = mockFetchFunction

    render(<GithubPopularRepositoriesApp />)

    await waitFor(() => {
      expect(screen.getByText(/EbookFoundation test/i)).toBeInTheDocument()
    })
    expect(window.fetch).toBeCalledWith(
      expect.stringContaining(`${apiUrl}?language=ALL`),
    )
    window.fetch = originalFetch
  })

  it('When a language filter button is clicked the given apiUrl should be called with the id of the language as the query parameter value for the language:::5:::', async () => {
    const originalFetch = window.fetch
    const mockFetchFunction = jest.fn().mockImplementation(() => ({
      ok: true,
      json: () => Promise.resolve({popular_repos: repositoriesData}),
    }))
    window.fetch = mockFetchFunction

    render(<GithubPopularRepositoriesApp />)

    await waitFor(() => {
      expect(screen.getByText(/EbookFoundation test/i)).toBeInTheDocument()
    })
    expect(window.fetch).toBeCalledWith(
      expect.stringContaining(`${apiUrl}?language=`),
    )

    userEvent.click(
      screen.getByRole('button', {name: languageFiltersData[1].language}),
    )
    await waitFor(() => {
      expect(screen.getByText(/EbookFoundation test/i)).toBeInTheDocument()
    })
    expect(window.fetch).toBeCalledWith(
      expect.stringContaining(
        `${apiUrl}?language=${languageFiltersData[1].id}`,
      ),
    )

    userEvent.click(
      screen.getByRole('button', {name: languageFiltersData[2].language}),
    )
    await waitFor(() => {
      expect(screen.getByText(/EbookFoundation test/i)).toBeInTheDocument()
    })
    expect(window.fetch).toBeCalledWith(
      expect.stringContaining(
        `${apiUrl}?language=${languageFiltersData[2].id}`,
      ),
    )

    userEvent.click(
      screen.getByRole('button', {name: languageFiltersData[3].language}),
    )
    await waitFor(() => {
      expect(screen.getByText(/EbookFoundation test/i)).toBeInTheDocument()
    })
    expect(window.fetch).toBeCalledWith(
      expect.stringContaining(
        `${apiUrl}?language=${languageFiltersData[3].id}`,
      ),
    )

    userEvent.click(
      screen.getByRole('button', {name: languageFiltersData[4].language}),
    )
    await waitFor(() => {
      expect(screen.getByText(/EbookFoundation test/i)).toBeInTheDocument()
    })
    expect(window.fetch).toBeCalledWith(
      expect.stringContaining(
        `${apiUrl}?language=${languageFiltersData[4].id}`,
      ),
    )

    userEvent.click(
      screen.getByRole('button', {name: languageFiltersData[0].language}),
    )

    await waitFor(() => {
      expect(screen.getByText(/EbookFoundation test/i)).toBeInTheDocument()
    })
    expect(window.fetch).toBeCalledWith(
      expect.stringContaining(
        `${apiUrl}?language=${languageFiltersData[0].id}`,
      ),
    )
    window.fetch = originalFetch
  })
})
