import { render, screen } from '@testing-library/react'
import { ListItem } from './index'

describe('listItem component', () => {
  const date = [1987, 2, 10]
  const testDate = new Date(...date)
  const testTitle = 'Awesome title'
  const testPrice = '200'

  it('should render a price', () => {
    expect.assertions(1)
    render(
      <ListItem date={testDate} title={testTitle} price={testPrice} />
    )
    const priceElement = screen.getByText(testPrice)
    expect(priceElement).toBeTruthy()
  })

  it('should render a date', () => {
    expect.assertions(1)
    render(
      <ListItem date={testDate} title={testTitle} price={testPrice} />
    )
    const [year, month, day] = date
    const yearElement = screen.getByText(`${day} / ${month} / ${year}`)
    expect(yearElement).toBeTruthy()
  })

  it('should render a title', () => {
    expect.assertions(1)
    render(
      (<ListItem date={testDate} title={testTitle} price={testPrice} />)
    )
    const titleElement = screen.getByText(testTitle)
    expect(titleElement).toBeTruthy()
  })
})
