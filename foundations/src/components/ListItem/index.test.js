import { render, screen } from '@testing-library/react'
import { ListItem } from './index'

describe('ListItem component', () => {
  const date = [1987, 2, 10]
  const testDate = new Date(...date)
  const testTitle = 'Awesome title'
  const testPrice = '200'

  it('It should render a price', () => {
    const { getByText } = render(
      <ListItem date={testDate} title={testTitle} price={testPrice} />
    )
    const priceElement = getByText(testPrice)
    expect(priceElement).toBeTruthy()
  })

  it('It should render a date', () => {
    const { getByText } = render(
      <ListItem date={testDate} title={testTitle} price={testPrice} />
    )
    const [year, month, day] = date
    const yearElement = getByText(`${day} / ${month} / ${year}`)
    expect(yearElement).toBeTruthy()
  })

  it('It should render a title', () => {
    const { getByText } = render(
      <ListItem date={testDate} title={testTitle} price={testPrice} />
    )
    const titleElement = getByText(testTitle)
    expect(titleElement).toBeTruthy()
  })
})
