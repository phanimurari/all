import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import DigitalTimer from '../App'

const playIcon = 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
const pauseIcon = 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
const resetIcon = 'https://assets.ccbp.in/frontend/react-js/reset-icon-img.png'

describe('Digital Timer tests', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error')
  })

  beforeEach(() => {
    jest.useFakeTimers()
    render(<DigitalTimer />)
  })

  afterEach(() => {
    expect(console.error).not.toHaveBeenCalled()
  })

  afterAll(() => {
    console.error.mockRestore()
    jest.restoreAllMocks()
  })

  it('Page should consist of HTML heading element with text content as "Digital Timer":::5:::', () => {
    expect(
      screen.getByRole('heading', {name: /Digital Timer/i}),
    ).toBeInTheDocument()
  })

  it('Page should initially consist of HTML heading element with text content as Timer limit value "25:00":::5:::', () => {
    expect(screen.getByRole('heading', {name: /25:00/i})).toBeInTheDocument()
  })

  it('Page should initially consist of HTML paragraph element with text content as "Paused":::5:::', () => {
    expect(screen.getByText(/Paused/i)).toBeInTheDocument()
    expect(screen.getByText(/Paused/i).tagName).toBe('P')
  })

  it('Page should consist of HTML image element with src attribute value as the URL for Play icon and alt text as "play icon":::5:::', () => {
    expect(
      screen.getByRole('img', {name: /play icon/i}).getAttribute('src'),
    ).toBe(playIcon)
  })

  it('Page should consist of HTML button element with text content as "Start":::5:::', () => {
    expect(screen.getByRole('button', {name: /Start/i})).toBeInTheDocument()
  })

  it('Page should consist of HTML image element with src attribute value as the URL for Reset icon and alt text as "reset icon":::5:::', () => {
    expect(
      screen.getByRole('img', {name: /reset icon/i}).getAttribute('src'),
    ).toBe(resetIcon)
  })

  it('Page should consist of HTML button element with text content as "Reset":::5:::', () => {
    expect(screen.getByRole('button', {name: /Reset/i})).toBeInTheDocument()
  })

  it('Page should consist of HTML paragraph element with text content as "Timer":::5:::', () => {
    expect(screen.getAllByText(/Timer/i)[1].tagName).toBe('P')
  })

  it('Page should consist of HTML paragraph element with text content as "25":::5:::', () => {
    expect(screen.getAllByText(/25/i)[1].tagName).toBe('P')
  })

  it('Page should consist of HTML button element with text content as "+" (plus):::5:::', () => {
    expect(screen.getByRole('button', {name: /\+/i})).toBeInTheDocument()
  })

  it('Page should consist of HTML button element with text content as "-" (minus):::5:::', () => {
    expect(screen.getByRole('button', {name: /-/i})).toBeInTheDocument()
  })

  it('When clicked on Start button the page should consist of HTML button element with text content as "Pause" by replacing the "Start":::5:::', () => {
    userEvent.click(screen.getByRole('button', {name: /Start/i}))

    expect(
      screen.queryByRole('button', {name: /Start/i}),
    ).not.toBeInTheDocument()
    expect(screen.getByRole('button', {name: /Pause/i})).toBeInTheDocument()
  })

  it('When clicked on Start button the page should consist of HTML image element with src as URL for pause icon and alt text as "pause icon":::5:::', () => {
    userEvent.click(screen.getByRole('button', {name: /Start/i}))

    expect(
      screen.queryByRole('img', {name: /Play icon/i}),
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('img', {name: /Pause icon/i}).getAttribute('src'),
    ).toBe(pauseIcon)
  })

  it('When clicked on Start button the Timer should start running backward and the page should consist of HTML heading element with text content displaying the elapsed time:::5:::', async () => {
    expect(screen.getByRole('heading', {name: /25:00/i})).toBeInTheDocument()
    userEvent.click(screen.getByRole('button', {name: /Start/i}))

    jest.runOnlyPendingTimers()
    expect(screen.getByRole('heading', {name: /24:59/i})).toBeInTheDocument()

    jest.runTimersToTime(1000)
    expect(screen.getByRole('heading', {name: /24:58/i})).toBeInTheDocument()

    jest.runTimersToTime(60000)
    expect(screen.getByRole('heading', {name: /23:58/i})).toBeInTheDocument()

    jest.runTimersToTime(60000)
    expect(screen.getByRole('heading', {name: /22:58/i})).toBeInTheDocument()
  })

  it('When clicked on Start button the page should consist of HTML paragraph element with text content as "Running" by replacing the "Paused":::5:::', () => {
    userEvent.click(screen.getByRole('button', {name: /Start/i}))

    expect(screen.queryByText(/Paused/i)).not.toBeInTheDocument()
    expect(screen.getByText(/Running/i).tagName).toBe('P')
  })

  it('When clicked on Pause button the page should consist of HTML button element with text content as "Start" by replacing the "Pause":::5:::', () => {
    userEvent.click(screen.getByRole('button', {name: /Start/i}))
    userEvent.click(screen.getByRole('button', {name: /Pause/i}))

    expect(
      screen.queryByRole('button', {name: /Pause/i}),
    ).not.toBeInTheDocument()
    expect(screen.getByRole('button', {name: /Start/i})).toBeInTheDocument()
  })

  it('When clicked on Pause button the page should consist of HTML image element with src as URL for play icon and alt text as "play icon":::5:::', () => {
    userEvent.click(screen.getByRole('button', {name: /Start/i}))
    userEvent.click(screen.getByRole('button', {name: /Pause/i}))

    expect(
      screen.queryByRole('img', {name: /Pause icon/i}),
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('img', {name: /Play icon/i}).getAttribute('src'),
    ).toBe(playIcon)
  })

  it('When clicked on Pause button the Timer should stop running backward and the page should consist of HTML heading element with text content displaying the remaining time:::5:::', async () => {
    expect(screen.getByRole('heading', {name: /25:00/i})).toBeInTheDocument()
    userEvent.click(screen.getByRole('button', {name: /Start/i}))

    jest.runOnlyPendingTimers()
    expect(screen.getByRole('heading', {name: /24:59/i})).toBeInTheDocument()

    jest.runTimersToTime(60000)
    expect(screen.getByRole('heading', {name: /23:59/i})).toBeInTheDocument()

    userEvent.click(screen.getByRole('button', {name: /Pause/i}))
    jest.runTimersToTime(60000)
    expect(screen.getByRole('heading', {name: /23:59/i})).toBeInTheDocument()
  })

  it('When clicked on Pause button the page should consist of HTML paragraph element with text content as "Paused" by replacing the "Running":::5:::', () => {
    userEvent.click(screen.getByRole('button', {name: /Start/i}))
    userEvent.click(screen.getByRole('button', {name: /Pause/i}))

    expect(screen.queryByText(/Running/i)).not.toBeInTheDocument()
    expect(screen.getByText(/Paused/i).tagName).toBe('P')
  })

  it('When clicked on Start button after pausing the timer then the Timer should start again:::5:::', async () => {
    expect(screen.getByRole('heading', {name: /25:00/i})).toBeInTheDocument()
    userEvent.click(screen.getByRole('button', {name: /Start/i}))

    jest.runOnlyPendingTimers()
    expect(screen.getByRole('heading', {name: /24:59/i})).toBeInTheDocument()

    jest.runTimersToTime(60000)
    expect(screen.getByRole('heading', {name: /23:59/i})).toBeInTheDocument()

    userEvent.click(screen.getByRole('button', {name: /Pause/i}))
    jest.runTimersToTime(60000)
    expect(screen.getByRole('heading', {name: /23:59/i})).toBeInTheDocument()

    userEvent.click(screen.getByRole('button', {name: /Start/i}))
    jest.runTimersToTime(60000)
    expect(screen.getByRole('heading', {name: /22:59/i})).toBeInTheDocument()
  })

  it('When the timer is started and reset button is clicked the timer should stop and reset to default value:::5:::', () => {
    expect(screen.getByRole('heading', {name: /25:00/i})).toBeInTheDocument()
    userEvent.click(screen.getByRole('button', {name: /Start/i}))

    jest.runOnlyPendingTimers()
    expect(screen.getByRole('heading', {name: /24:59/i})).toBeInTheDocument()

    jest.runTimersToTime(60000)
    expect(screen.getByRole('heading', {name: /23:59/i})).toBeInTheDocument()
    userEvent.click(screen.getByRole('button', {name: /Reset/i}))
    jest.runTimersToTime(60000)
    expect(screen.getByRole('heading', {name: /25:00/i})).toBeInTheDocument()
  })

  it('When the HTML button element with "+" as text content is clicked then the timer limit value should increase by 1:::5:::', () => {
    expect(screen.getByRole('button', {name: /\+/})).toBeInTheDocument()
    userEvent.click(screen.getByRole('button', {name: /\+/}))
    expect(screen.getByText('26:00')).toBeInTheDocument()
  })

  it('When the HTML button element with "-" as text content is clicked then the timer limit value should decrease by 1:::5:::', () => {
    expect(screen.getByRole('button', {name: /-/})).toBeInTheDocument()
    userEvent.click(screen.getByRole('button', {name: /-/}))
    expect(screen.getByText('24:00')).toBeInTheDocument()
  })

  it('When the Timer is running and the HTML button with text content as "+" is clicked then the timer limit value should not increase:::5:::', () => {
    userEvent.click(screen.getByRole('button', {name: /Start/i}))
    jest.runTimersToTime(1000)
    userEvent.click(screen.getByRole('button', {name: /\+/}))
    expect(screen.getByText('25')).toBeInTheDocument()
  })

  it('When the Timer is running and the HTML button with text content as "-" is clicked then the timer limit value should not decrease:::5:::', () => {
    userEvent.click(screen.getByRole('button', {name: /Start/i}))
    jest.runTimersToTime(1000)
    userEvent.click(screen.getByRole('button', {name: /-/}))
    expect(screen.getByText('25')).toBeInTheDocument()
  })
})
