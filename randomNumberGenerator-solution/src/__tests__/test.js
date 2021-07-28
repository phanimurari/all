import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from '../App'

describe('App tests', () => {
  let mockRandom
  beforeAll(() => {
    jest.spyOn(console, 'error')
  })

  beforeEach(() => {
    mockRandom = jest.spyOn(global.Math, 'random').mockReturnValue(0.11)
    render(<App />)
  })

  afterAll(() => {
    console.error.mockRestore()
  })

  afterEach(() => {
    expect(console.error).not.toHaveBeenCalled()
    jest.spyOn(global.Math, 'random').mockRestore()
  })

  it('Page should consist of HTML main heading element with text content as "Random Number":::5:::', () => {
    expect(
      screen.getByRole('heading', {name: /Random Number/i, exact: false}),
    ).toBeInTheDocument()
  })

  it('Page should consist of HTML paragraph element with text content as "Generate a random number in the range of 0 to 100":::5:::', () => {
    expect(
      screen.getByText(/Generate a random number in the range of 0 to 100/i, {
        exact: false,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Generate a random number in the range of 0 to 100/i, {
        exact: false,
      }).tagName,
    ).toBe('P')
  })

  it('Page should consist of HTML button element with text content as "Generate":::5:::', () => {
    expect(
      screen.getByRole('button', {name: /Generate/i, exact: false}),
    ).toBeInTheDocument()
  })

  it('Page should consist of HTML element with 0 as text content initially:::5:::', () => {
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('When Generate button is clicked, Math.random() should be used to generate a random number:::5:::', () => {
    userEvent.click(
      screen.getByRole('button', {name: /Generate/i, exact: false}),
    )
    expect(mockRandom).toHaveBeenCalled()
  })

  it('When Generate button is clicked, a random number should be generated and displayed:::5:::', () => {
    userEvent.click(
      screen.getByRole('button', {name: /Generate/i, exact: false}),
    )
    expect(screen.getByText(/11/, {exact: false})).toBeInTheDocument()
  })
})
