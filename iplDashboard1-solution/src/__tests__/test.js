import {setupServer} from 'msw/node'
import {rest} from 'msw'
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from '../App'

const teamsListResponse = {
  teams: [
    {
      name: 'Royal Challengers Bangalore',
      id: 'RCB',
      team_image_url:
        'https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png',
    },
    {
      name: 'Kolkata Knight Riders',
      id: 'KKR',
      team_image_url:
        'https://assets.ccbp.in/frontend/react-js/kkr-logo-img.png',
    },
    {
      name: 'Kings XI Punjab',
      id: 'KXP',
      team_image_url:
        'https://assets.ccbp.in/frontend/react-js/kxp-logo-img.png',
    },
    {
      name: 'Chennai Super Kings',
      id: 'CSK',
      team_image_url:
        'https://assets.ccbp.in/frontend/react-js/csk-logo-img.png',
    },
    {
      name: 'Rajasthan Royals',
      id: 'RR',
      team_image_url:
        'https://assets.ccbp.in/frontend/react-js/rr-logo-img.png',
    },
    {
      name: 'Mumbai Indians',
      id: 'MI',
      team_image_url:
        'https://assets.ccbp.in/frontend/react-js/mi-logo-img.png',
    },
    {
      name: 'Sunrisers Hyderabad',
      id: 'SH',
      team_image_url:
        'https://assets.ccbp.in/frontend/react-js/srh-logo-img.png',
    },
    {
      name: 'Delhi Capitals',
      id: 'DC',
      team_image_url:
        'https://assets.ccbp.in/frontend/react-js/dc-logo-img.png',
    },
  ],
}

const recentMatchesResponse = {
  team_banner_url: 'https://assets.ccbp.in/frontend/react-js/kkr-team-img.png',
  latest_match_details: {
    umpires: 'CB Gaffaney, VK Sharma',
    result: 'Kolkata Knight Riders Won by 7 wickets',
    man_of_the_match: 'Shubman Gill',
    id: '1216545',
    date: '2020-09-26',
    venue: 'At Sheikh Zayed Stadium, Abu Dhabi',
    competing_team: 'Sunrisers Hyderabad',
    competing_team_logo:
      'https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png',
    first_innings: 'Sunrisers Hyderabad',
    second_innings: 'Kolkata Knight Riders',
    match_status: 'Won',
  },
  recent_matches: [
    {
      umpires: 'RK Illingworth, K Srinivasan',
      result: 'Royal Challengers Bangalore Won by 82 runs',
      man_of_the_match: 'AB de Villiers',
      id: '1216540',
      date: '2020-10-12',
      venue: 'At Sharjah Cricket Stadium, Sharjah',
      competing_team: 'Royal Challengers Bangalore',
      competing_team_logo:
        'https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png',
      first_innings: 'Royal Challengers Bangalore',
      second_innings: 'Kolkata Knight Riders',
      match_status: 'Lost',
    },
    {
      umpires: 'C Shamshuddin, RK Illingworth',
      result: 'Chennai Super Kings Won by 6 wickets',
      man_of_the_match: 'RD Gaikwad',
      id: '1216536',
      date: '2020-10-29',
      venue: 'At Dubai International Cricket Stadium, Dubai',
      competing_team: 'Chennai Super Kings',
      competing_team_logo:
        'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1200px-Chennai_Super_Kings_Logo.svg.png',
      first_innings: 'Kolkata Knight Riders',
      second_innings: 'Chennai Super Kings',
      match_status: 'Lost',
    },
    {
      umpires: 'Nitin Menon, PR Reiffel',
      result: 'Kolkata Knight Riders Won by 60 runs',
      man_of_the_match: 'PJ Cummins',
      id: '1216530',
      date: '2020-11-01',
      venue: 'At Dubai International Cricket Stadium, Dubai',
      competing_team: 'Rajasthan Royals',
      competing_team_logo:
        'https://www.rajasthanroyals.com/assets/images/RR_blue%20(1).png',
      first_innings: 'Kolkata Knight Riders',
      second_innings: 'Rajasthan Royals',
      match_status: 'Won',
    },
  ],
}

const iplLogo = 'https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png'

const apiUrlTeams = 'https://apis.ccbp.in/ipl'

const apiUrlRecentMatches = 'https://apis.ccbp.in/ipl/KKR'

const server = setupServer(
  rest.get(apiUrlRecentMatches, (req, res, ctx) =>
    res(ctx.json(recentMatchesResponse)),
  ),
  rest.get(apiUrlTeams, (req, res, ctx) => res(ctx.json(teamsListResponse))),
)

const rtlRender = (ui = <App />, path = '/') => {
  const history = createMemoryHistory()
  history.push(path)
  render(<Router history={history}>{ui}</Router>)
  return {
    history,
  }
}

describe('Home route Test Cases', () => {
  beforeAll(() => {
    server.listen()
  })
  afterEach(() => {
    server.resetHandlers()
  })
  afterAll(() => {
    server.close()
  })

  it('Page should render the teamsList data as a list containing a unique key as a prop for each team in Home Route:::5:::', async () => {
    const originalError = console.error
    const errorMockFn = jest.fn()
    console.error = errorMockFn

    rtlRender()
    await waitFor(() => {
      expect(
        screen.getByText('Royal Challengers Bangalore'),
      ).toBeInTheDocument()
    })

    expect(console.error).not.toBeCalledWith(
      expect.stringContaining('Each child in a list should have a unique '),
      expect.anything(),
      expect.anything(),
      expect.anything(),
    )
    expect(console.error).not.toBeCalledWith(
      expect.stringContaining('Encountered two children with the same key'),
      expect.anything(),
      expect.anything(),
    )
    console.error = originalError
  })

  it('Home Route should consist of HTML main heading element with text content as IPL Dashboard:::5:::', async () => {
    rtlRender()
    await waitFor(() => {
      expect(
        screen.getByRole('heading', {name: /IPL Dashboard/i, exact: false}),
      ).toBeInTheDocument()
      expect(
        screen.getByText('Royal Challengers Bangalore'),
      ).toBeInTheDocument()
    })
  })

  it('Home Route should consist of HTML image element with IPL Logo image as the value of src attribute and ipl-logo as alt attribute value:::5:::', async () => {
    rtlRender()
    await waitFor(() => {
      expect(
        screen.getByRole('img', {name: /ipl-logo/i, exact: false}),
      ).toBeInTheDocument()
      expect(
        screen.getByRole('img', {name: /ipl-logo/i, exact: false}).src,
      ).toBe(iplLogo)
      expect(
        screen.getByText('Royal Challengers Bangalore'),
      ).toBeInTheDocument()
    })
  })

  it('When the Home Route is opened, it should initially contain an HTML container element with testid attribute value as loader:::5:::', async () => {
    rtlRender()
    await waitForElementToBeRemoved(() => screen.queryByTestId('loader'))
  })

  it('When the Home Route is opened, an HTTP GET request should be made to the URL to get IPL teams:::5:::', async () => {
    const originalFetch = window.fetch
    const mockFetchFunction = jest.fn().mockImplementation(() => ({
      json: () => Promise.resolve(teamsListResponse),
    }))
    window.fetch = mockFetchFunction

    rtlRender()

    expect(window.fetch).toBeCalledWith(apiUrlTeams)
    await waitFor(() => {
      expect(
        screen.getByText('Royal Challengers Bangalore'),
      ).toBeInTheDocument()
    })
    window.fetch = originalFetch
  })

  it('When the HTTP GET request made in Home Route is successful, then the page should consist of HTML elements with text content as teamNames received in the response:::5:::', async () => {
    rtlRender()
    await waitFor(() => {
      expect(
        screen.getByText('Royal Challengers Bangalore'),
      ).toBeInTheDocument()
    })
    const {teams} = teamsListResponse
    expect(screen.getByText(teams[0].name)).toBeInTheDocument()
    expect(screen.getByText(teams[1].name)).toBeInTheDocument()
    expect(screen.getByText(teams[2].name)).toBeInTheDocument()
    expect(screen.getByText(teams[3].name)).toBeInTheDocument()
    expect(screen.getByText(teams[4].name)).toBeInTheDocument()
    expect(screen.getByText(teams[5].name)).toBeInTheDocument()
    expect(screen.getByText(teams[6].name)).toBeInTheDocument()
    expect(screen.getByText(teams[7].name)).toBeInTheDocument()
  })

  it('When the HTTP GET request made in Home Route is successful, then the page should consist of HTML image elements with src attribute values as teamImageUrl received in the response:::5:::', async () => {
    rtlRender()
    await waitFor(() => {
      expect(
        screen.getByText('Royal Challengers Bangalore'),
      ).toBeInTheDocument()
    })
    const {teams} = teamsListResponse
    const imageElements = screen.getAllByRole('img')
    expect(imageElements.length).toBeGreaterThanOrEqual(8)
    expect(imageElements[1].src).toBe(teams[0].team_image_url)
    expect(imageElements[2].src).toBe(teams[1].team_image_url)
    expect(imageElements[3].src).toBe(teams[2].team_image_url)
    expect(imageElements[4].src).toBe(teams[3].team_image_url)
    expect(imageElements[5].src).toBe(teams[4].team_image_url)
    expect(imageElements[6].src).toBe(teams[5].team_image_url)
    expect(imageElements[7].src).toBe(teams[6].team_image_url)
    expect(imageElements[8].src).toBe(teams[7].team_image_url)
  })

  it('When a team card is clicked in Home Route, then the page should be navigated to the Team Matches route with "/team-matches/:id" in the URL path:::5:::', async () => {
    const {history} = rtlRender()
    await waitFor(() => {
      expect(screen.getByText('Kolkata Knight Riders')).toBeInTheDocument()
    })
    userEvent.click(screen.getByText('Kolkata Knight Riders'))
    expect(history.location.pathname).toBe('/team-matches/KKR')
  })

  it('When a "/bad-path" is entered in the browser tab then the page should be navigated to NotFoundRoute and consists of an HTML heading element with "Page Not Found" as text content:::5:::', async () => {
    rtlRender(<App />, '/recent-matches/KKR')
    await waitFor(() => {
      expect(
        screen.getByText(/Page Not Found/i, {exact: false}),
      ).toBeInTheDocument()
    })
  })

  it('Each team card should be wrapped with the Link from react-router-dom:::5:::', async () => {
    rtlRender()
    await waitFor(() => {
      expect(screen.getByText('Kolkata Knight Riders')).toBeInTheDocument()
    })
    expect(screen.getAllByRole('link').length).toBe(8)
  })
})
