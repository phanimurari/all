import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'
import {setupServer} from 'msw/node'
import {rest} from 'msw'

import {
  render,
  screen,
  waitForElementToBeRemoved,
  waitFor,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from '../App'

const headerLogo = 'https://assets.ccbp.in/frontend/react-js/wave-logo-img.png'

const blogsListData = [
  {
    id: 1,
    title: 'React v16.9.0 and the Roadmap Update',
    image_url: 'https://miro.medium.com/max/1050/1*i3hzpSEiEEMTuWIYviYweQ.png',
    avatar_url:
      'https://miro.medium.com/max/4096/1*wiOSfPd2sY0gXSNK9vv6bg.jpeg',
    author: 'Dan Abramov,',
    topic: 'React.js',
  },
  {
    id: 2,
    title: 'React v16.7: No, This Is Not the One With Hooks',
    image_url: 'https://miro.medium.com/max/3158/1*kEPCQNY4dwVyaFuLEwJcNQ.png',
    avatar_url: 'https://avatars.githubusercontent.com/u/3624098?v=4',
    author: 'Andrew Clark',
    topic: 'React.js',
  },
]

const blogItemDetails = {
  id: 2,
  title: 'React v16.7: No, This Is Not the One With Hooks',
  image_url: 'https://miro.medium.com/max/3158/1*kEPCQNY4dwVyaFuLEwJcNQ.png',
  avatar_url: 'https://avatars.githubusercontent.com/u/3624098?v=4',
  author: 'Andrew Clark',
  content:
    'React follows semantic versioning. Typically, this means that we use patch versions for bugfixes, and minors for new (non-breaking) features. However, we reserve the option to release minor versions even if they do not include new features. The motivation is to reserve patches for changes that have a very low chance of breaking. Patches are the most important type of release because they sometimes contain critical bugfixes.',
  topic: 'React.js',
}

const apiUrl = 'https://apis.ccbp.in/blogs'

const server = setupServer(
  rest.get('https://apis.ccbp.in/blogs/2', (req, res, ctx) =>
    res(ctx.delay(100), ctx.json(blogItemDetails)),
  ),
  rest.get('https://apis.ccbp.in/blogs', (req, res, ctx) =>
    res(ctx.json(blogsListData)),
  ),
)

const aboutPageImage =
  'https://assets.ccbp.in/frontend/react-js/about-blog-img.png'
const contactPageImage =
  'https://assets.ccbp.in/frontend/react-js/contact-blog-img.png'
const notFoundPageImage =
  'https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png'

const aboutRoutePath = '/about'
const homeRoutePath = '/'
const contactRoutePath = '/contact'
const blogItemDetailsPath = '/blogs/1'
const notFoundRoutePath = '/consdsadsad'

const rtlRender = (ui = <App />, path = '/') => {
  const history = createMemoryHistory()
  history.push(path)
  render(<Router history={history}>{ui}</Router>)
  return {
    history,
  }
}

describe('Fetch And Routing Tests', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error')
    server.listen()
  })

  afterEach(() => {
    server.resetHandlers()
    expect(console.error).not.toHaveBeenCalled()
  })
  afterAll(() => {
    console.error.mockRestore()
    server.close()
  })

  it('Page should consist of an HTML image element in the header with the given logo URL as src and alt text as "wave":::5:::', async () => {
    rtlRender()
    await waitFor(() =>
      expect(
        screen.getByText(/React v16.9.0 and the Roadmap Update/i, {
          exact: false,
        }),
      ).toBeInTheDocument(),
    )
    const imageEl = screen.getByAltText(/wave/i, {exact: false})
    expect(imageEl.src).toContain(headerLogo)
  })

  it('Page should consist of a React Router Link element in the header with "Home" as text content:::5:::', async () => {
    rtlRender()
    await waitFor(() =>
      expect(
        screen.getByText(/React v16.9.0 and the Roadmap Update/i, {
          exact: false,
        }),
      ).toBeInTheDocument(),
    )
    expect(
      screen.getByRole('link', {name: /Home/i, exact: false}),
    ).toBeInTheDocument()
  })

  it('Page should consist of a React Router Link element in the header with "About" as text content:::5:::', async () => {
    rtlRender()
    await waitFor(() =>
      expect(
        screen.getByText(/React v16.9.0 and the Roadmap Update/i, {
          exact: false,
        }),
      ).toBeInTheDocument(),
    )
    expect(
      screen.getByRole('link', {name: /About/i, exact: false}),
    ).toBeInTheDocument()
  })

  it('Page should consist of a React Router Link element in the header with "Contact" as text content:::5:::', async () => {
    rtlRender()
    await waitFor(() =>
      expect(
        screen.getByText(/React v16.9.0 and the Roadmap Update/i, {
          exact: false,
        }),
      ).toBeInTheDocument(),
    )

    expect(
      screen.getByRole('link', {name: /Contact/i, exact: false}),
    ).toBeInTheDocument()
  })

  it('When the "/about" is entered in the browser tab then the page should be navigated to AboutRoute and consists of an HTML heading element with "About" as text content:::5:::', async () => {
    rtlRender(<App />, aboutRoutePath)

    expect(
      screen.getByRole('heading', {name: /About/i, exact: false}),
    ).toBeInTheDocument()
  })

  it('When the "/contact" is entered in the browser tab then the page should be navigated to ContactRoute and consists of an HTML heading element with "Contact" as text content:::5:::', async () => {
    rtlRender(<App />, contactRoutePath)

    expect(
      screen.getByRole('heading', {name: /Contact/i, exact: false}),
    ).toBeInTheDocument()
  })

  it('When the "/bad-path" is entered in the browser tab then the page should be navigated to NotFoundRoute and consists of an HTML heading element with "Not Found" as text content:::5:::', async () => {
    rtlRender(<App />, notFoundRoutePath)

    expect(
      screen.getByRole('heading', {name: /Not Found/i, exact: false}),
    ).toBeInTheDocument()
  })

  it('When the About link in the header is clicked then the page should be navigated to AboutRoute with "/about" in URL path:::5:::', async () => {
    const {history} = rtlRender(<App />, homeRoutePath)
    await waitFor(() =>
      expect(
        screen.getByText(/React v16.9.0 and the Roadmap Update/i, {
          exact: false,
        }),
      ).toBeInTheDocument(),
    )

    userEvent.click(screen.getByRole('link', {name: /About/i}))
    expect(history.location.pathname).toBe(aboutRoutePath)
  })

  it('When the Contact link in the header is clicked then the page should be navigated to ContactRoute with "/contact" in URL path:::5:::', async () => {
    const {history} = rtlRender(<App />, homeRoutePath)
    await waitFor(() =>
      expect(
        screen.getByText(/React v16.9.0 and the Roadmap Update/i, {
          exact: false,
        }),
      ).toBeInTheDocument(),
    )

    userEvent.click(screen.getByRole('link', {name: /Contact/i}))
    expect(history.location.pathname).toBe(contactRoutePath)
  })

  it('When the Home link in the header is clicked then the page should be navigated to HomeRoute with "/" in URL path:::5:::', async () => {
    const {history} = rtlRender(<App />, contactRoutePath)

    userEvent.click(screen.getByRole('link', {name: /Home/i}))
    expect(history.location.pathname).toBe(homeRoutePath)
  })

  it('Page should consists of an HTML heading element with "Wade Warren" as text content when rendering HomeRoute initially:::5:::', async () => {
    const {history} = rtlRender()
    await waitFor(() =>
      expect(
        screen.getByText(/React v16.9.0 and the Roadmap Update/i, {
          exact: false,
        }),
      ).toBeInTheDocument(),
    )

    expect(history.location.pathname).toBe(homeRoutePath)
    expect(
      screen.getByRole('heading', {name: /Wade Warren/i, exact: false}),
    ).toBeInTheDocument()
  })

  it('Page should consist of an HTML image element with alt text as "profile pic":::5:::', async () => {
    rtlRender()
    await waitFor(() =>
      expect(
        screen.getByText(/React v16.9.0 and the Roadmap Update/i, {
          exact: false,
        }),
      ).toBeInTheDocument(),
    )

    expect(
      screen.getByAltText(/profile pic/i, {exact: false}),
    ).toBeInTheDocument()
  })

  it('Page should consists of an HTML paragraph element with "Software developer" as text content when rendering HomeRoute initially:::5:::', async () => {
    rtlRender()
    await waitFor(() =>
      expect(
        screen.getByText(/React v16.9.0 and the Roadmap Update/i, {
          exact: false,
        }),
      ).toBeInTheDocument(),
    )

    expect(
      screen.getAllByText(/Software Developer/i, {exact: false}).length,
    ).toBeGreaterThanOrEqual(1)
  })

  it('Home Route should consist of HTML heading elements with text content as the value of the "title" key received in the API response:::5:::', async () => {
    rtlRender(<App />, homeRoutePath)
    await waitFor(() =>
      expect(
        screen.getByText(/React v16.9.0 and the Roadmap Update/i, {
          exact: false,
        }),
      ).toBeInTheDocument(),
    )

    expect(screen.getAllByRole('heading').length).toBeGreaterThanOrEqual(2)
  })

  it('Home Route should consist of HTML paragraph elements with text content as the value of the "author" key received in response for each blog item:::5:::', async () => {
    rtlRender(<App />, homeRoutePath)
    await waitFor(() =>
      expect(
        screen.getByText(/React v16.9.0 and the Roadmap Update/i, {
          exact: false,
        }),
      ).toBeInTheDocument(),
    )
    expect(
      screen.getByText(blogsListData[0].author, {exact: false}),
    ).toBeInTheDocument()
    expect(
      screen.getByText(blogsListData[0].author, {exact: false}).tagName,
    ).toBe('P')
    expect(
      screen.getByText(blogsListData[1].author, {exact: false}),
    ).toBeInTheDocument()
    expect(
      screen.getByText(blogsListData[0].author, {exact: false}).tagName,
    ).toBe('P')
  })

  it('When the page is loaded initially an HTTP GET request should be made to the given apiUrl:::5:::', async () => {
    const originalFetch = window.fetch
    const mockFetchFunction = jest.fn().mockImplementation(() => ({
      json: () => Promise.resolve(blogsListData),
    }))

    window.fetch = mockFetchFunction

    rtlRender()

    expect(window.fetch).toBeCalledWith(apiUrl)
    await waitFor(() =>
      expect(
        screen.getByText(/React v16.9.0 and the Roadmap Update/i, {
          exact: false,
        }),
      ).toBeInTheDocument(),
    )
    window.fetch = originalFetch
  })

  it('Page should consist of React Router Link elements in the Home including every blog in the blog list component:::5:::', async () => {
    rtlRender(<App />, homeRoutePath)
    await waitFor(() =>
      expect(
        screen.getByText(/React v16.9.0 and the Roadmap Update/i, {
          exact: false,
        }),
      ).toBeInTheDocument(),
    )
    expect(screen.getAllByRole('link').length).toBe(5)
  })

  it('Loading should be displayed while fetching blog item details:::5:::', async () => {
    rtlRender(<App />, homeRoutePath)
    await waitForElementToBeRemoved(screen.getByTestId('loader'))
  })

  it('When the first Blog item in the Blog list is clicked then the page should be navigated to BlogItemDetails with "/blogs/1" in URL path:::5:::', async () => {
    const {history} = rtlRender(<App />, homeRoutePath)
    await waitFor(() =>
      expect(
        screen.getByText(/React v16.9.0 and the Roadmap Update/i, {
          exact: false,
        }),
      ).toBeInTheDocument(),
    )

    userEvent.click(screen.getAllByRole('link')[3])
    expect(history.location.pathname).toBe(blogItemDetailsPath)
  })

  it('When entered "/blogs/2" in the URL path, the respective BlogItemDetails component should be rendered in the page:::5:::', async () => {
    rtlRender(<App />, '/blogs/2')
    await waitFor(() =>
      expect(
        screen.getByText(/React v16.7: No, This Is Not the One With Hooks/i, {
          exact: false,
        }),
      ).toBeInTheDocument(),
    )

    screen.getByRole('heading', {
      name: /React v16.7: No, This Is Not the One With Hooks/,
      exact: false,
    })
  })
  it('When navigated to a blog post, the respective BlogItemDetails component rendered should consist of an HTML image element:::5:::', async () => {
    rtlRender(<App />, '/blogs/2')
    await waitFor(() =>
      expect(
        screen.getByText(/React v16.7: No, This Is Not the One With Hooks/i, {
          exact: false,
        }),
      ).toBeInTheDocument(),
    )

    expect(screen.getAllByRole('img')[2].src).toContain(
      'https://miro.medium.com/max/3158/1*kEPCQNY4dwVyaFuLEwJcNQ.png',
    )
  })

  it('When navigated to a blog post, the respective BlogItemDetails component rendered should consist of an HTML paragraph element:::5:::', async () => {
    rtlRender(<App />, '/blogs/2')
    await waitFor(() =>
      expect(
        screen.getByText(/React v16.7: No, This Is Not the One With Hooks/i, {
          exact: false,
        }),
      ).toBeInTheDocument(),
    )

    expect(
      screen.getByText(blogItemDetails.content, {exact: false}),
    ).toBeInTheDocument()
  })
})
